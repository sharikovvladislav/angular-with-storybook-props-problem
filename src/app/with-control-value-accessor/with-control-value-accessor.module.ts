import { ProxyModule } from './../proxy.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithControlValueAccessorComponent } from './with-control-value-accessor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WithControlValueAccessorComponent
  ],
  exports: [
    WithControlValueAccessorComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class WithControlValueAccessorModule { }
