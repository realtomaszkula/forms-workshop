import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import {
  FormValue,
  TemplateDrivenFormsExampleComponent
} from './template-driven-forms-example.component';

describe('Simple Form (Template Driven)', () => {
  let component: TemplateDrivenFormsExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsExampleComponent>;
  let model: FormValue;
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
      declarations: [TemplateDrivenFormsExampleComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsExampleComponent);
    component = fixture.componentInstance;
    model = component.model;
    fixture.detectChanges();
  });

  describe('username', () => {
    const ctrl = () =>
      fixture.debugElement.query(By.css(selectors.username.input));
    const errors = () =>
      fixture.debugElement.query(By.css(selectors.username.errors));

    it('should render control', () => {
      expect(ctrl()).not.toBeNull();
      expect(ctrl().attributes['placeholder']).toBe('Username');
      expect(ctrl().attributes['type']).toBe('text');
      expect(ctrl().attributes['required']).toBe('');
    });

    it('should render errors', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
      ctrl().nativeElement.value = 'woo';
      ctrl().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errors()).toBeNull();
      ctrl().nativeElement.value = null;
      ctrl().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errors()).not.toBeNull();
    });
  });
  describe('password', () => {
    const ctrl = () =>
      fixture.debugElement.query(By.css(selectors.password.input));
    const errors = () =>
      fixture.debugElement.query(By.css(selectors.password.errors));

    it('should render control', () => {
      expect(ctrl()).not.toBeNull();
      expect(ctrl().attributes['placeholder']).toBe('Password');
      expect(ctrl().attributes['type']).toBe('password');
      expect(ctrl().attributes['required']).toBe('');
    });

    it('should render errors', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
      ctrl().nativeElement.value = 'woo';
      ctrl().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errors()).toBeNull();
      ctrl().nativeElement.value = null;
      ctrl().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errors()).not.toBeNull();
    });
  });

  describe('passwordConfirm', () => {
    const ctrl = () =>
      fixture.debugElement.query(By.css(selectors.passwordConfirm.input));
    const errors = () =>
      fixture.debugElement.query(By.css(selectors.passwordConfirm.errors));

    it('should render control', () => {
      expect(ctrl()).not.toBeNull();
      expect(ctrl().attributes['placeholder']).toBe('Confirm Password');
      expect(ctrl().attributes['type']).toBe('password');
      expect(ctrl().attributes['required']).toBe('');
    });

    it('should render errors', async () => {
      fixture.detectChanges();
      await fixture.whenStable();
      ctrl().nativeElement.value = 'woo';
      ctrl().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errors()).toBeNull();
      ctrl().nativeElement.value = null;
      ctrl().nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      await fixture.whenStable();
      expect(errors()).not.toBeNull();
    });
  });
});
