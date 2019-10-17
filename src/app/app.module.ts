import { WithControlValueAccessorModule } from './with-control-value-accessor/with-control-value-accessor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProxyModule } from './proxy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ProxyModule,
    FormsModule,
    BrowserModule,
    WithControlValueAccessorModule
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
