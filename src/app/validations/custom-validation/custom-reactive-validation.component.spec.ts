import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomReactiveValidationComponent } from './custom-reactive-validation.component';

describe('CustomReactiveValidationComponent', () => {
  let component: CustomReactiveValidationComponent;
  let fixture: ComponentFixture<CustomReactiveValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomReactiveValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
