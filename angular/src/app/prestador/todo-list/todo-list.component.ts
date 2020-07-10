import { Component, OnInit } from '@angular/core';

import http from 'src/app/http.service'
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  servicos: Array<any> = []
  erro: String

  constructor(private appServ: AppService) {

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
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
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
      if (erro.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
      if (erro.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
      else this.appServ.callSb('Não foi possível aceitar o serviço', true)
    })
  }

  recusa(id_serv) {

    http({
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
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
      if (err.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
      if (err.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
      else this.appServ.callSb('Não foi possível Recusar o serviço', true)
    })
  }

  ngOnInit(): void {
  }

}
