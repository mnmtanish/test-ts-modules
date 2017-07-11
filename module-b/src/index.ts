import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export const R = 'R1';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class ModuleBModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModuleBModule,
    };
  }
}
