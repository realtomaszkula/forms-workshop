import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AsyncTemplateValidationComponent } from './async-template-validation.component';
import {
  UniqueUsernameValidationDirective,
  UniqueUsernameValidator
} from './username-unique.validator';

describe('AsyncTemplateValidationComponent', () => {
  let component: AsyncTemplateValidationComponent;
  let fixture: ComponentFixture<AsyncTemplateValidationComponent>;
  const selectors = {
    input: 'input',
    errors: 'mat-error',
    spinner: 'mat-spinner'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AsyncTemplateValidationComponent,
        UniqueUsernameValidationDirective
      ],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: UniqueUsernameValidator,
          useValue: {
            validate: () =>
              new Promise(resolve =>
                setTimeout(() => resolve({ userExists: true }), 400)
              )
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    const errors = () => fixture.debugElement.query(By.css(selectors.errors));
    const spinner = () => fixture.debugElement.query(By.css(selectors.spinner));
    const input = fixture.debugElement.query(By.css(selectors.input))
      .nativeElement;
    fixture.detectChanges();

    expect(errors()).toBeNull();
    expect(spinner()).toBeNull();
    input.value = 'woo';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('blur'));

    tick(100);
    fixture.detectChanges();
    expect(spinner()).not.toBeNull();

    tick(300);
    fixture.detectChanges();
    expect(spinner()).toBeNull();
    expect(errors()).not.toBeNull();
  }));
});
