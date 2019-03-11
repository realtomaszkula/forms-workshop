import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  FormValue,
  ReactiveFormsExampleComponent
} from './reactive-forms-example.component';

describe('Simple Form (Reactive)', () => {
  let component: ReactiveFormsExampleComponent;
  let fixture: ComponentFixture<ReactiveFormsExampleComponent>;
  let form: FormGroup;
  const selectors = {
    username: {
      input: '[data-test="username-input"]',
      errors: '[data-test="username-errors"]'
    },
    password: {
      input: '[data-test="password"]',
      errors: '[data-test="password-errors"]'
    },
    passwordConfirm: {
      input: '[data-test="password-confirm"]',
      errors: '[data-test="password-confirm-errors"]'
    },
    buttons: {
      submit: '[data-test="submit-button"]',
      reset: '[data-test="reset-button"]'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsExampleComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsExampleComponent);
    component = fixture.componentInstance;
    form = component.form;
    fixture.detectChanges();
  });

  describe('form', () => {
    describe('value', () => {
      it('should match FormValue interface', () => {
        expect(form.value).toEqual({
          username: '',
          password: '',
          passwordConfirm: ''
        });
      });
    });
    describe('username', () => {
      it('should be required', () => {
        const ctrl = form.get('username');
        ctrl.setValue(null);
        expect(ctrl.hasError('required')).toBe(true);
        ctrl.setValue('a');
        expect(ctrl.hasError('required')).toBe(false);
      });
    });
    describe('password ', () => {
      it('should be required', () => {
        const ctrl = form.get('password');
        ctrl.setValue(null);
        expect(ctrl.hasError('required')).toBe(true);
        ctrl.setValue('a');
        expect(ctrl.hasError('required')).toBe(false);
      });
    });
    describe('password confirm', () => {
      it('should be required', () => {
        const ctrl = form.get('passwordConfirm');
        ctrl.setValue(null);
        expect(ctrl.hasError('required')).toBe(true);
        ctrl.setValue('a');
        expect(ctrl.hasError('required')).toBe(false);
      });
    });
  });
  describe('template', () => {
    it('should render username control', () => {
      const ctrl = fixture.debugElement.query(By.css(selectors.username.input));
      expect(ctrl).not.toBeNull();
      expect(ctrl.attributes['placeholder']).toBe('Username');
      expect(ctrl.attributes['type']).toBe('text');
    });
    it('should render username errors', () => {
      const errors = () =>
        fixture.debugElement.query(By.css(selectors.username.errors));

      form.get('username').setValue(null);
      fixture.detectChanges();
      expect(errors()).not.toBeNull();

      form.get('username').setValue('u');
      fixture.detectChanges();
      expect(errors()).toBeNull();
    });
    it('should render password control', () => {
      const ctrl = fixture.debugElement.query(By.css(selectors.password.input));
      expect(ctrl).not.toBeNull();
      expect(ctrl.attributes['placeholder']).toBe('Password');
      expect(ctrl.attributes['type']).toBe('password');
    });
    it('should render password errors', () => {
      const errors = () =>
        fixture.debugElement.query(By.css(selectors.password.errors));

      form.get('password').setValue(null);
      fixture.detectChanges();
      expect(errors()).not.toBeNull();

      form.get('password').setValue('p');
      fixture.detectChanges();
      expect(errors()).toBeNull();
    });
    it('should render passwordConfirm control', () => {
      const ctrl = fixture.debugElement.query(
        By.css(selectors.passwordConfirm.input)
      );
      expect(ctrl).not.toBeNull();
      expect(ctrl.attributes['placeholder']).toBe('Confirm Password');
      expect(ctrl.attributes['type']).toBe('password');
    });
    it('should render passwordConfirm errors', () => {
      const errors = () =>
        fixture.debugElement.query(By.css(selectors.passwordConfirm.errors));

      form.get('passwordConfirm').setValue(null);
      fixture.detectChanges();
      expect(errors()).not.toBeNull();

      form.get('passwordConfirm').setValue('p');
      fixture.detectChanges();
      expect(errors()).toBeNull();
    });
  });
  describe('behavior', () => {
    it('clicking submit should emit (submitted)', () => {
      const formValue: FormValue = {
        username: 'Bob',
        password: 'password',
        passwordConfirm: 'password'
      };
      component.form.setValue(formValue);
      fixture.detectChanges();
      let submittedValue = null;
      component.submitted.subscribe(v => (submittedValue = v));
      const submitBtn = fixture.debugElement.query(
        By.css(selectors.buttons.submit)
      );
      submitBtn.nativeElement.click();

      expect(submittedValue).toEqual(formValue);
    });
    it('clicking reset should reset form', () => {
      const formValue: FormValue = {
        username: 'Bob',
        password: 'password',
        passwordConfirm: 'password'
      };
      component.form.setValue(formValue);
      fixture.detectChanges();
      const resetButton = fixture.debugElement.query(
        By.css(selectors.buttons.reset)
      );
      resetButton.nativeElement.click();

      expect(component.form.value).toEqual({
        username: null,
        password: null,
        passwordConfirm: null
      });
    });
  });
});
