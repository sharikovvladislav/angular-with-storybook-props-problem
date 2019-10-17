import { WithControlValueAccessorModule } from './with-control-value-accessor/with-control-value-accessor.module';
import { SomeComponentModule } from './some-component/some-component.module';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [ SomeComponentModule, WithControlValueAccessorModule ]
})
export class ProxyModule { }
