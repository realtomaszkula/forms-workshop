import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsExampleComponent } from './template-driven-forms-example.component';

describe('TemplateDrivenFormsExampleComponent', () => {
  let component: TemplateDrivenFormsExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormsExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
