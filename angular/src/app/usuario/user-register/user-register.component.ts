import { Component, OnInit, ViewChild } from '@angular/core';

import http from 'src/app/http.service'
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

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

  constructor(private appServ: AppService, private router: Router) { }

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
          this.router.navigate(['/'])
          this.appServ.callSb('Usuário cadastrado', false)
        }).catch((error) => {
          console.log(error);
          if (error.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
          if (error.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
          else this.appServ.callSb('Usuário não encontrado', true)
        })

      } else {
        this.appServ.callSb('As senhas não são iguais', true)
      }
    } else {
      this.appServ.callSb('Preencha os campos corretamente', true)
    }

  }

  ngOnInit(): void {
  }

}
