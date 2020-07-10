import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import http from 'src/app/http.service'
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prest-register',
  templateUrl: './prest-register.component.html',
  styleUrls: ['./prest-register.component.css']
})
export class PrestRegisterComponent implements OnInit {
  //declaracao de variavel que vai usar no front
  categorias: Array<any>

  servicos: Array<String> = []

  // private formBuilder: FormBuilder
  constructor(private appServ: AppService, private router: Router) {
    //vai pega a lista de categorias q vai fica 
    http({
      url: '/lista-cat',
      method: 'GET',
    }).then((data) => {
      this.categorias = data.data
    }).catch((error) => {
      this.appServ.callSb(error.error, true)
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

            this.appServ.callSb('Prestador cadastrado com sucesso', false)
            this.router.navigate(['/'])
          }).catch((error) => {
            console.log(error);
            if (error.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
            if (error.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
            else this.appServ.callSb('Ocorreu um erro interno :`(', true)
          })
        } else {
          this.appServ.callSb('Selecione ao menos um serviço', true)
        }
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
