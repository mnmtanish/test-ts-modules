import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { R } from 'module-b';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';

export const Q = R + '.1';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
