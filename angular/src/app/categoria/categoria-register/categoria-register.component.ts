import { Component, OnInit, ViewChild } from '@angular/core';
import http from 'src/app/http.service'

@Component({
  selector: 'app-categoria-register',
  templateUrl: './categoria-register.component.html',
  styleUrls: ['./categoria-register.component.css']
})
export class CategoriaRegisterComponent implements OnInit {

  constructor() { }

  @ViewChild('nome') nome
  msg: String
  erro: String

  register() {
    var nome = this.nome.nativeElement.value
    if (nome) {
      http({
        url: 'categoria/nova',
        data: { nome },
        method: 'POST'
      }).then((data) => {
        console.log(data);
        this.erro = null
        this.msg = 'Categoria registrada!'
      }).catch((err) => {
        if (err.response.status == 401) return this.erro = 'Sem autorização'
      })
    } else {
      this.erro = 'Insira um nome'
      this.msg = null
    }
  }

  ngOnInit(): void {
  }



}
