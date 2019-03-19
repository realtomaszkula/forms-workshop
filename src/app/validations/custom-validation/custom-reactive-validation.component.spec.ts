import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CustomReactiveValidationComponent } from './custom-reactive-validation.component';

fdescribe('CustomReactiveValidationComponent', () => {
  let component: CustomReactiveValidationComponent;
  let fixture: ComponentFixture<CustomReactiveValidationComponent>;
  const selectors = {
    errors: 'mat-error'
  };
  const errors = () => fixture.debugElement.query(By.css(selectors.errors));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomReactiveValidationComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render errors', () => {
    component.ctrl.setValue('aaaAAA123#');
    fixture.detectChanges();
    expect(errors()).toBeNull();
    component.ctrl.setValue('');
    fixture.detectChanges();
    expect(errors()).not.toBeNull();
  });
});
