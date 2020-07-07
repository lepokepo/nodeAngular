import { Component, OnInit } from '@angular/core';

import http from 'src/app/http.service'

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  servicos: Array<any> = []
  erro: String

  constructor() {
    http({
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      url: 'servico/avalia-list',
      method: 'get'
    }).then((data) => {
      console.log(data.data);
      this.servicos = data.data
      this.erro = null
      if (this.servicos.length == 0) {
        this.erro = 'Nenhum serviço para avaliar'
      }
    })
  }

  avalia(_id) {
    let s = this.servicos.find(s => s._id == _id) // vai achar o servico pelo id 

    if (s.avaliacao <= 5 && s.avaliacao >= 1) {
      http({
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
        url: 'servico/avalia',
        method: 'PATCH',
        data: {
          _id,
          avaliacao: s.avaliacao
        }
      }).then((data) => {
        console.log(data.data);
        let i = this.servicos.indexOf(s)//vai pegar a posicao do servico
        this.servicos.splice(i, 1)
        this.erro = null
        if (this.servicos.length == 0) {
          this.erro = 'Nenhum serviço para avaliar'
        }
      }).catch((err) => {
        console.log(err);
      })
    } else {
      if (s.avaliacao) {
        if (s.avaliacao > 5 || s.avaliacao < 1) {
          this.erro = 'Nota Inválida'
        }
      } else {
        this.erro = 'Diga o quanto gostou do serviço'
      }
    }
  }

  keyup(event) {
    // event.target.value  event.target.id

    let s = this.servicos.find(s => s._id == event.target.id) // vai achar o servico pelo id 
    let i = this.servicos.indexOf(s)//vai pegar a posicao do servico
    this.servicos[i].avaliacao = event.target.value

  }

  ngOnInit(): void {
  }

}
