import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import http from 'src/app/http.service'


@Component({
  selector: 'app-prest-register',
  templateUrl: './prest-register.component.html',
  styleUrls: ['./prest-register.component.css']
})
export class PrestRegisterComponent implements OnInit {
  //declaracao de variavel que vai usar no front
  categorias: Array<any>
  erro: String
  msg: String

  servicos: Array<String> = []

  // private formBuilder: FormBuilder
  constructor() {
    //vai pega a lista de categorias q vai fica 
    http({
      url: '/lista-cat',
      method: 'GET',
    }).then((data) => {
      this.categorias = data.data
    }).catch((error) => {
      this.erro = error.error
    })
  }
  // declaracao dos input html
  @ViewChild('email') email
  @ViewChild('senha') senha
  @ViewChild('senhaConfirm') senhaConfirm
  @ViewChild('cnpj') cnpj
  @ViewChild('nome') nome

  pegaLadrao(cat) {
    if (this.servicos.includes(cat)) {
      let i = this.servicos.indexOf(cat)
      this.servicos.splice(i, 1)
    } else {
      this.servicos.push(cat)
    }
    console.log(this.servicos);
    console.log(this.servicos.length);
  }

  register() {
    var email: String = this.email.nativeElement.value,
      senha: String = this.senha.nativeElement.value,
      senhaConfirm: String = this.senhaConfirm.nativeElement.value,
      nome: String = this.nome.nativeElement.value,
      cnpj: String = this.cnpj.nativeElement.value



    if (email && senha && senhaConfirm && nome && cnpj) {
      if (senha == senhaConfirm) {
        if (this.servicos.length > 0) {

          http({
            url: '/novo-prest',
            method: 'POST',
            data: {
              nome,
              email,
              senha,
              cnpj,
              servicos: this.servicos,
              roles: ['prestador']
            }
          }).then((data) => {
            console.log(data);

            this.msg = 'Prestador cadastrado!'
            this.erro = null

          }).catch((error) => {
            console.log(error);
            this.erro = 'moio'
            this.msg = null
          })
        } else {
          this.erro = 'Selecione 1 servico'
        }
      } else {
        this.erro = 'As senhas não são iguais'
      }

    } else {
      this.erro = 'Enche o tanqe'
    }

  }



  ngOnInit(): void {
  }

}
