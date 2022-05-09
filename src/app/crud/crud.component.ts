import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Vetor
  dados:any = [];

  // Alerta
  alerta:boolean = false;
  txtAlerta:string = 'teste';
  corAlerta:string = 'alert-danger';

  // Visibilidade dos botões
  btnCadastrar: boolean = true;

  // Obter indice para alterar ou remover
  indice:number = 0;

  // Grupo para formulário
  formulario = new FormGroup({
    nome : new FormControl(''),
    cidade : new FormControl(''),
    email : new FormControl('')
  }); 

  // Validar campos
  validar():boolean {
    
    let valida = false;
    if (this.formulario.value.nome === '' || this.formulario.value.nome == null) {
      this.txtAlerta = 'O campo nome precisa estar preenchido';
      this.corAlerta = 'alert-danger';
    } 
    else  if (this.formulario.value.cidade === '' || this.formulario.value.cidade == null) {
      this.txtAlerta = 'O campo cidade precisa estar preenchido';
      this.corAlerta = 'alert-danger';
    } 
    else  if (this.formulario.value.email === '' || this.formulario.value.email == null) {
      this.txtAlerta = 'O campo email precisa estar preenchido';
      this.corAlerta = 'alert-danger';
    } 
    else {
     valida = true;
    }
    return valida;
  }
  // Cadastrar
  cadastrar():void{
    
    if (this.validar()) {
      this.txtAlerta = 'Cadastro efetuado com sucesso';
      this.corAlerta = 'alert-success';
      this.dados.push(this.formulario.value);
      this.limpaCampos();
    }
   
    this.alerta = true;

    setTimeout(() => {
      this.alerta = false;
    }, 3000);
  }

  selecionar(indice:number):void {
    this.indice = indice;
    this.formulario.setValue(this.dados[indice]);
    this.btnCadastrar = false;
  }

  // Remover 
  remover():void {
    this.dados.splice(this.indice, 1);
    this.limpaCampos();

  }

  alterar():void {

    if (this.validar()) {
      this.txtAlerta = 'Alteração efetuada com sucesso';
      this.corAlerta = 'alert-success';
      this.dados[this.indice] = this.formulario.value;
      this.limpaCampos();
    }

    this.alerta = true;

    setTimeout(() => {
      this.alerta = false;
    }, 3000);
  }

  limpaCampos():void {
    this.btnCadastrar = true;
    this.formulario.reset();
  }

}
