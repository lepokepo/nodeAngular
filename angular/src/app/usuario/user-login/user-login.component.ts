import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from "@angular/router";

import http from 'src/app/http.service'
import { UsuarioService } from '../usuario.service';

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
  constructor(private router: Router, private userService: UsuarioService) { }

  login() {
    var email: String = this.email.nativeElement.value,
      senha: String = this.senha.nativeElement.value
    if (email && senha) {
      http({
        headers: null,
        url: '/login',
        method: 'POST',
        data: {
          email,
          senha
        }
      }).then((data) => {
        console.log(data.data);

        let roles = data.data.usuario.roles
        localStorage.setItem('token', data.data.token)

        if (roles.includes('prestador')) {
          this.router.navigate(['/prestador/todo-list'])
        } else if (roles.includes('adm')) {
          this.router.navigate(['/'])
        } else {
          this.router.navigate(['/categoria/lista'])
        }
      }).catch((error) => {

        this.erro = 'Usuário não encontrado'

      })
    } else {
      this.erro = 'Insira seus dados'
    }
  }

  ngOnInit(): void {
  }

}
