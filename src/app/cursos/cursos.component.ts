

import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;
  inteiro: number;
  cursos: string[];

  //Injeção de dependência
  constructor(private cursosService: CursosService) {
    this.nomePortal = "http://www.aprendadotnet.com.br";
    this.inteiro = 15;

   /* for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }*/
   // var servico = new CursosService();

    //Injeção de dependência
    this.cursos = cursosService.getCursos();



  }
}