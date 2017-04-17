import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string;
  inteiro: number;
  cursos: string[] = ['Java', 'DotNet', 'Angular'];
  constructor() {
    this.nomePortal = "http://www.aprendadotnet.com.br";
    this.inteiro = 15;
    
  }
}