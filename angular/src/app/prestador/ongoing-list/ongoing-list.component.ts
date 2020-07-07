import { Component, OnInit, Input, ViewChild } from '@angular/core';


import http from 'src/app/http.service'

@Component({
  selector: 'app-ongoing-list',
  templateUrl: './ongoing-list.component.html',
  styleUrls: ['./ongoing-list.component.css']
})
export class OngoingListComponent implements OnInit {

  servicos: Array<any> = []
  erro: String
  constructor() {

    http({
      url: '/servico/ongoing-list',
      method: 'GET'
    }).then((data) => {
      console.log(data.data);
      this.servicos = data.data
      if (this.servicos.length == 0) {
        this.erro = 'Nenhum serviço encontrado'
      }
    })

  }
  finaliza(_id) {

    let s = this.servicos.find(s => s._id == _id) // vai achar o servico pelo id 
    console.log(s);

    if (s.valor) {
      http({
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
      })
    } else {
      this.erro = 'Adicione um valor'
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
