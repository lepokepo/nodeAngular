import { Component, OnInit, ViewChild } from '@angular/core';

import http from 'src/app/http.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  //declaracao dos campo la no front
  @ViewChild('email') email
  @ViewChild('senha') senha
  @ViewChild('senhaConfirm') senhaConfirm
  @ViewChild('nome') nome

  constructor() { }

  erro: String
  msg: String

  register() {
    var email: String = this.email.nativeElement.value,
      senha: String = this.senha.nativeElement.value,
      senhaConfirm: String = this.senhaConfirm.nativeElement.value,
      nome: String = this.nome.nativeElement.value

    if (email && senha && senhaConfirm && nome) {
      if (senha == senhaConfirm) {

        http({
          url: '/novo-user',
          method: 'POST',
          data: {
            nome,
            email,
            senha,
            roles: ['user']
          }
        }).then((data) => {
          this.msg = 'Usuário cadastrado!'
          this.erro = null
        }).catch((error) => {
          console.log(error);
          this.erro = 'moio'
          this.msg = null
        })

      } else {
        this.erro = 'As senhas não são iguais'
      }
    } else {
      this.erro = 'Por favor preencha todos os campos'
    }

  }

  ngOnInit(): void {
  }

}
