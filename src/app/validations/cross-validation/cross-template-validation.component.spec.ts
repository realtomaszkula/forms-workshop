import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossTemplateValidationComponent } from './cross-template-validation.component';

describe('CrossTemplateValidationComponent', () => {
  let component: CrossTemplateValidationComponent;
  let fixture: ComponentFixture<CrossTemplateValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrossTemplateValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossTemplateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
