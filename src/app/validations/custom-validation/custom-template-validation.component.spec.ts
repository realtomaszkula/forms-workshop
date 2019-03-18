import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplateValidationComponent } from './custom-template-validation.component';

describe('CustomTemplateValidationComponent', () => {
  let component: CustomTemplateValidationComponent;
  let fixture: ComponentFixture<CustomTemplateValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTemplateValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
