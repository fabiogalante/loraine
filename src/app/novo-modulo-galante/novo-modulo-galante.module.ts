
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NovoModuloGalanteComponent } from './novo-modulo-galante.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NovoModuloGalanteComponent
  ],
  exports:[
    NovoModuloGalanteComponent
  ]
})
export class NovoModuloGalanteModule { }
