import { Component, OnInit } from '@angular/core';

import http from 'src/app/http.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  servicos: Array<any> = []
  erro: String

  constructor() {

    http({
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      url: '/servico/todo-list',
      method: 'GET'

    }).then((data) => {
      console.log(data.data);
      this.servicos = data.data
      if (this.servicos.length == 0) {
        this.erro = 'Nenhum serviço encontrado'
      }
    }).catch((erro) => {
      console.log(erro);

    })
  }

  aceita(id_serv) {
    http({
      // headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      url: '/servico/aceita',
      data: {
        id_serv
      },
      method: 'PATCH'

    }).then((data) => {
      console.log(data.data);
      let s = this.servicos.find(s => s._id == id_serv) // vai achar o servico pelo id 
      let i = this.servicos.indexOf(s)//vai pegar a posicao do servico
      this.servicos.splice(i, 1)
      if (this.servicos.length == 0) { this.erro = 'Nenhum servico disponível' }
    }).catch((erro) => {
      console.log(erro);
      this.erro = 'Algo deu errado .-.'
    })
  }

  recusa(id_serv) {

    http({
      url: 'servico/recusa',
      data: {
        _id: id_serv
      },
      method: 'PATCH'
    }).then((data) => {
      console.log(data);
      let s = this.servicos.find(s => s._id == id_serv) // vai achar o servico pelo id 
      let i = this.servicos.indexOf(s)//vai pegar a posicao do servico
      this.servicos.splice(i, 1)
      if (this.servicos.length == 0) { this.erro = 'Nenhum servico disponível' }
    }).catch((err) => {
      this.erro = 'Algo deu errado .-.'
    })
  }

  ngOnInit(): void {
  }

}
