import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CrossTemplateValidationComponent } from './cross-template-validation.component';
import { PasswordsMatchValidatorDirective } from './passwords-match.validator';

describe('CrossTemplateValidationComponent', () => {
  let component: CrossTemplateValidationComponent;
  let fixture: ComponentFixture<CrossTemplateValidationComponent>;
  const selectors = {
    password: '[data-test="password"]',
    passwordConfirm: '[data-test="passwordConfirm"]',
    errors: '[data-test="errors"]'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CrossTemplateValidationComponent,
        PasswordsMatchValidatorDirective
      ],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render errors', async () => {
    const password = fixture.debugElement.query(By.css(selectors.password))
      .nativeElement as HTMLInputElement;
    const passwordConfirm = fixture.debugElement.query(
      By.css(selectors.passwordConfirm)
    ).nativeElement as HTMLInputElement;
    const errors = () => fixture.debugElement.query(By.css(selectors.errors));

    fixture.detectChanges();
    await fixture.whenStable();

    password.value = 'one';
    password.dispatchEvent(new Event('input'));
    passwordConfirm.value = 'two';
    passwordConfirm.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(errors()).toBeNull();

    password.dispatchEvent(new Event('blur'));
    passwordConfirm.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(errors()).not.toBeNull();

    passwordConfirm.value = 'one';
    passwordConfirm.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(errors()).toBeNull();
  });
});
