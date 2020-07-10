import { Component, OnInit, ViewChild } from '@angular/core';
import { PrestadorService } from 'src/app/prestador/prestador.service';
import { Router } from '@angular/router';

import http from 'src/app/http.service'
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-serv-register',
  templateUrl: './serv-register.component.html',
  styleUrls: ['./serv-register.component.css']
})
export class ServRegisterComponent implements OnInit {

  erro: String
  prest_id: String

  constructor(private prestService: PrestadorService,
    private router: Router, private appServ: AppService) {

    this.prestService.prest_id.subscribe(prest_id => this.prest_id = prest_id)

    if (this.prest_id == 'default message - PRESTADOR') {
      this.router.navigate(['/categoria/lista'])
    }
  }
  @ViewChild('titulo') titulo
  @ViewChild('local') local
  @ViewChild('descricao') descricao

  send() {
    let titulo = this.titulo.nativeElement.value,
      local = this.local.nativeElement.value,
      descricao = this.descricao.nativeElement.value

    if (titulo && local && descricao) {
      http({
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
        method: 'POST',
        url: '/servico/novo',
        data: {
          titulo,
          local,
          descricao,
          prest_id: this.prest_id
        }
      }).then((data) => {
        console.log(data.data);
        this.appServ.callSb('Serviço solicitado', false)
        this.router.navigate(['/'])
      }).catch((error) => {
        if (error.status === 401) { this.appServ.callSb('Sem permissão para realizar a operação', true) }
        if (error.status === 403) { this.appServ.callSb('Sem direito para realizar a operação', true) }
        else this.appServ.callSb('Não foi possível solicitar o serviço', true)
      })
    } else {
      this.appServ.callSb('Preencha todos os campos', true)
    }

  }
  ngOnInit(): void {
  }

}
