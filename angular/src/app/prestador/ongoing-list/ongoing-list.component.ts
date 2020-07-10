import { Component, OnInit, Input, ViewChild } from '@angular/core';


import http from 'src/app/http.service'
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-ongoing-list',
  templateUrl: './ongoing-list.component.html',
  styleUrls: ['./ongoing-list.component.css']
})
export class OngoingListComponent implements OnInit {

  servicos: Array<any> = []
  erro: String

  constructor(private appServ: AppService) {

    http({
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      url: '/servico/ongoing-list',
      method: 'GET'
    }).then((data) => {
      console.log(data.data);
      this.servicos = data.data
      if (this.servicos.length == 0) {
        this.erro = 'Nenhum serviço encontrado'
      }
    }).catch((erro) => {
      if (erro.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
      if (erro.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
    })

  }
  finaliza(_id) {

    let s = this.servicos.find(s => s._id == _id) // vai achar o servico pelo id 
    console.log(s);

    if (s.valor) {
      http({
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
        url: 'servico/finaliza',
        method: 'PATCH',
        data: {
          _id,
          valor: s.valor
        }
      }).then((data) => {
        console.log(data.data);
        let i = this.servicos.indexOf(s)//vai pegar a posicao do servico
        this.servicos.splice(i, 1)
        this.erro = null
        if (this.servicos.length == 0) {
          this.erro = 'Nenhum serviço encontrado'
        }
      }).catch((err) => {
        console.log(err);
        if (err.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
        if (err.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
      })
    } else {
      this.appServ.callSb('Por favor informe um valor', true)
    }
  }

  keyup(event) {
    // event.target.value  event.target.id
    let s = this.servicos.find(s => s._id == event.target.id) // vai achar o servico pelo id 
    let i = this.servicos.indexOf(s)//vai pegar a posicao do servico
    this.servicos[i].valor = event.target.value
  }

  ngOnInit(): void {
  }

}
