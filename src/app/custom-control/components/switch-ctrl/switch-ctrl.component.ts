import { Component, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch-ctrl',
  template: `
    <button
      mat-raised-button
      [disabled]="isDisabled"
      [color]="yesBtnColor"
      (click)="value = true"
      (blur)="onTouched()"
      data-test="yes-btn"
    >
      Yes
    </button>
    <button
      mat-raised-button
      [disabled]="isDisabled"
      [color]="noBtnColor"
      (click)="value = false"
      (blur)="onTouched()"
      data-test="no-btn"
    >
      No
    </button>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SwitchCtrlComponent
    }
  ]
})
export class SwitchCtrlComponent implements ControlValueAccessor {
  private _value: boolean;
  get value(): boolean {
    return this._value;
  }
  set value(newValue: boolean) {
    if (this._value !== newValue) {
      this._value = newValue;
      if (this.onChange) {
        this.onChange(newValue);
      }
    }
  }

  get yesBtnColor() {
    return this.value === true ? 'primary' : '';
  }

  get noBtnColor() {
    return this.value === false ? 'primary' : '';
  }

  onChange: Function;
  onTouched: Function;
  isDisabled: boolean;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
