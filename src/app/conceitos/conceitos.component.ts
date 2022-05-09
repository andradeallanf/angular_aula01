import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-conceitos',
  templateUrl: './conceitos.component.html',
  styleUrls: ['./conceitos.component.css']
})
export class ConceitosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   /** tipos de váriavel em Typescript
   * string   ->  Qualquer caractere
   * number   ->  Apenas inteiros reais
   * boolean  ->  true/false
   * any      ->  Trabalha com vários tipos de dados
   */

  // Frase
  frase:string = 'Aprendendo Angular na Apex';

  // Visibilidade de um elemento
  visivel:boolean = false;

  // Vetor de cursos
  cursos:any = ['HTML', 'CSS', 'Javascript', 'Node.js', 'React', 'Angular'];

  // JSON
  clientes:any = [
    {'nome':'Aline',    'idade':31},
    {'nome':'Caio',     'idade':30},
    {'nome':'Carla',    'idade':38},
    {'nome':'Daniel',   'idade':28},
    {'nome':'Fernanda', 'idade':25},
  ];

  // Manipulando formulários
  texto = new FormControl('');

  // Função para alterar o valor da variável visível
  acao():void {
    this.visivel = !this.visivel;
  }

}
