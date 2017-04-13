


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CursosModule } from './cursos/cursos.module';
import { NovoModuloGalanteModule } from './novo-modulo-galante/novo-modulo-galante.module';

import { AppComponent } from './app.component';

import { MeuPrimeiroComponet } from './meu-primeiro/meu-primeiro.componet';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursoDetalheComponent } from './curso/curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    AppComponent, 
    MeuPrimeiroComponet, 
    MeuPrimeiro2Component, CursoDetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    NovoModuloGalanteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
