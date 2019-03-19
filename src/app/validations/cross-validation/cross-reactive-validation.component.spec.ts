import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CrossReactiveValidationComponent } from './cross-reactive-validation.component';

describe('CrossReactiveValidationComponent', () => {
  let component: CrossReactiveValidationComponent;
  let fixture: ComponentFixture<CrossReactiveValidationComponent>;
  const selectors = {
    password: '[data-test="password"]',
    passwordConfirm: '[data-test="passwordConfirm"]',
    errors: '[data-test="errors"]'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrossReactiveValidationComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render errors', () => {
    const errors = () => fixture.debugElement.query(By.css(selectors.errors));
    const password = component.form.get('password');
    const passwordConfirm = component.form.get('passwordConfirm');

    password.setValue('one');
    passwordConfirm.setValue('two');
    fixture.detectChanges();
    expect(errors()).toBeFalsy();

    password.markAsTouched();
    passwordConfirm.markAsTouched();
    fixture.detectChanges();
    expect(errors()).toBeTruthy();

    password.setValue('one');
    passwordConfirm.setValue('one');
    fixture.detectChanges();
    expect(errors()).toBeFalsy();
  });
});
