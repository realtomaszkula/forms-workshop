import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CustomTemplateValidationComponent } from './custom-template-validation.component';
import { PasswordStrengthValidationDirective } from './password-strength.validator';

describe('CustomTemplateValidationComponent', () => {
  let component: CustomTemplateValidationComponent;
  let fixture: ComponentFixture<CustomTemplateValidationComponent>;
  const selectors = {
    errors: 'mat-error'
  };
  const errors = () => fixture.debugElement.query(By.css(selectors.errors));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomTemplateValidationComponent,
        PasswordStrengthValidationDirective
      ],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render errors', async () => {
    component.value = 'aaaAAA123#';
    // [(ngModel)] updates are async, see source
    // https://github.com/angular/angular/blob/4.1.0-rc.0/packages/forms/src/directives/ng_model.ts#L213-L214
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(errors()).toBeNull();

    component.value = '';
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(errors()).not.toBeNull();
  });
});
