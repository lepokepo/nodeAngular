import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { AppService } from 'src/app/app.service';
import axios from 'axios'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  //instancia input la do front
  @ViewChild('email') email: ElementRef;
  @ViewChild('senha') senha: ElementRef;

  //esse carinha vê se o servidor respondeu ou se deu erro
  erro: String

  //variaveis fora do constructor, sendo chamada com this.NOMEVAR
  //essa classe deixa fazer post get eos caraio
  constructor(private servico: AppService, private httpClient: HttpClient, private router: Router) {
    // this.itens = service.getItens();
  }

  verificaUser() {
    //pega o valor dos input instanciado ali encima
    var email: String = this.email.nativeElement.value
    var senha: String = this.senha.nativeElement.value

    localStorage.removeItem('Authentication')
    localStorage.removeItem('token')

    //no post primeiro é o link, depois o body
    this.httpClient.post('http://localhost:3030/login', {
      email,
      senha
    }).subscribe((data: any) => {
      //esse subscribe trata oq o server responde

      localStorage.setItem('Authorization', data.token)
      // if (this.servico.validaToken() == true) {
      // }
    }, (error) => {
      console.log(error);

      this.erro = error.error
    }
    )
  }



  login() {
    var email: String = this.email.nativeElement.value
    var senha: String = this.senha.nativeElement.value
    if (email && senha) {
      axios.post('http://localhost:3030/login', {
        email,
        senha
      }).then((res) => {
        console.log(res.data);
        localStorage.setItem('Authorization', res.data.token)
        this.router.navigate(['/usuario/user-home'])
      }).catch((error) => {
        this.erro = 'Usuario ou senha invalidos'
      })
    } else {
      this.erro = 'Insira seus dados'
    }

  }

  ngOnInit(): void {
  }

}
