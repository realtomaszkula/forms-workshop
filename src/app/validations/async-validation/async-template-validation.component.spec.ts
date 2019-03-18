import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncTemplateValidationComponent } from './async-template-validation.component';

describe('AsyncTemplateValidationComponent', () => {
  let component: AsyncTemplateValidationComponent;
  let fixture: ComponentFixture<AsyncTemplateValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncTemplateValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
