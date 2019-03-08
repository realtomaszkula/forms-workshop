import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { SwitchCtrlComponent } from './switch-ctrl.component';

@Component({
  template: `
    <app-switch-ctrl [formControl]="ctrl" valie></app-switch-ctrl>
  `
})
class HostComponent {
  ctrl = new FormControl();
}

fdescribe('SwitchCtrlComponent', () => {
  let host: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  const selectors = {
    yesBtn: 'button[data-test="yes-btn"]',
    noBtn: 'button[data-test="no-btn"]'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatButtonModule],
      declarations: [HostComponent, SwitchCtrlComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should work model -> template', () => {
    host.ctrl.setValue(true);
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(selectors.yesBtn)).attributes[
        'ng-reflect-color'
      ]
    ).toBe('primary');
    expect(
      fixture.debugElement.query(By.css(selectors.noBtn)).attributes[
        'ng-reflect-color'
      ]
    ).toBe('');
    host.ctrl.setValue(false);
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(selectors.yesBtn)).attributes[
        'ng-reflect-color'
      ]
    ).toBe('');
    expect(
      fixture.debugElement.query(By.css(selectors.noBtn)).attributes[
        'ng-reflect-color'
      ]
    ).toBe('primary');
  });

  it('should work template -> model', () => {
    expect(host.ctrl.value).toBe(null);
    fixture.debugElement.query(By.css(selectors.yesBtn)).nativeElement.click();
    expect(host.ctrl.value).toBe(true);
    fixture.debugElement.query(By.css(selectors.noBtn)).nativeElement.click();
    expect(host.ctrl.value).toBe(false);
  });

  it('should be touched on blur', () => {
    expect(host.ctrl.touched).toBe(false);
    fixture.debugElement
      .query(By.css(selectors.yesBtn))
      .triggerEventHandler('blur', {});
    expect(host.ctrl.touched).toBe(true);

    host.ctrl.markAsUntouched();
    expect(host.ctrl.touched).toBe(false);

    fixture.debugElement
      .query(By.css(selectors.noBtn))
      .triggerEventHandler('blur', {});
    expect(host.ctrl.touched).toBe(true);
  });

  it('should be disabled when ctrl is disabled', () => {
    host.ctrl.disable();
    fixture.detectChanges();
    expect(
      (fixture.debugElement.query(By.css(selectors.yesBtn))
        .nativeElement as HTMLButtonElement).disabled
    ).toBe(true);
    expect(
      (fixture.debugElement.query(By.css(selectors.noBtn))
        .nativeElement as HTMLButtonElement).disabled
    ).toBe(true);

    host.ctrl.enable();
    fixture.detectChanges();
    expect(
      (fixture.debugElement.query(By.css(selectors.yesBtn))
        .nativeElement as HTMLButtonElement).disabled
    ).toBe(false);
    expect(
      (fixture.debugElement.query(By.css(selectors.noBtn))
        .nativeElement as HTMLButtonElement).disabled
    ).toBe(false);
  });
});
