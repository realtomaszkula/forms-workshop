import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AsyncReactiveValidationComponent } from './async-reactive-validation.component';
import { UniqueUsernameValidator } from './username-unique.validator';

describe('AsyncReactiveValidationComponent', () => {
  let component: AsyncReactiveValidationComponent;
  let fixture: ComponentFixture<AsyncReactiveValidationComponent>;
  const selectors = {
    input: 'input',
    errors: 'mat-error',
    spinner: 'mat-spinner'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncReactiveValidationComponent],
      imports: [ReactiveFormsModule],
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
    fixture = TestBed.createComponent(AsyncReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    const errors = () => fixture.debugElement.query(By.css(selectors.errors));
    const spinner = () => fixture.debugElement.query(By.css(selectors.spinner));

    fixture.detectChanges();
    expect(errors()).toBeNull();
    expect(spinner()).toBeNull();
    component.ctrl.setValue('tomasz');
    component.ctrl.markAsTouched();

    tick(100);
    fixture.detectChanges();
    expect(spinner()).not.toBeNull();

    tick(300);
    fixture.detectChanges();
    expect(spinner()).toBeNull();
    expect(errors()).not.toBeNull();
  }));
});
