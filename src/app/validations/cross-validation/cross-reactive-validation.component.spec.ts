import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossReactiveValidationComponent } from './cross-reactive-validation.component';

describe('CrossReactiveValidationComponent', () => {
  let component: CrossReactiveValidationComponent;
  let fixture: ComponentFixture<CrossReactiveValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrossReactiveValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
