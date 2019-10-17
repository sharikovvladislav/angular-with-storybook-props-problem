import { Component, OnDestroy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import uuid from 'uuid/v4';

@Component({
  selector: 'app-with-control-value-accessor',
  templateUrl: './with-control-value-accessor.component.html',
  styleUrls: ['./with-control-value-accessor.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => WithControlValueAccessorComponent), multi: true }
  ]
})
export class WithControlValueAccessorComponent implements OnDestroy, ControlValueAccessor {
  instanceId = uuid();
  internalValue = null;
  onChange: Function = () => {};


  constructor() {
    console.log('>> constructor', this.instanceId);
  }

  ngOnDestroy() {
    console.log('>> ngOnDestroy12323451', this.instanceId);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched() {}
  writeValue(newValue) {
    console.log('>> writeValue', 'value is', newValue, this.instanceId);
    this.internalValue = newValue;
  }
}
