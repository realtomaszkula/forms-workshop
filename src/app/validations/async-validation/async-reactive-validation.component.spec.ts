import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncReactiveValidationComponent } from './async-reactive-validation.component';

describe('AsyncReactiveValidationComponent', () => {
  let component: AsyncReactiveValidationComponent;
  let fixture: ComponentFixture<AsyncReactiveValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncReactiveValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncReactiveValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
