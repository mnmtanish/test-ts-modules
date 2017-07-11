import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ModuleAModule } from 'module-a';
// import { ModuleBModule } from 'module-b';
// import { ModuleCModule } from 'module-c';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // ModuleAModule,
    // ModuleBModule,
    // ModuleCModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
