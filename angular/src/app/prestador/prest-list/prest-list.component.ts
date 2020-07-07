import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../categoria/categoria.service';

import http from 'src/app/http.service'
import { PrestadorService } from '../prestador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prest-list',
  templateUrl: './prest-list.component.html',
  styleUrls: ['./prest-list.component.css']
})
export class PrestListComponent implements OnInit {

  prestadores: Array<any>
  erro: String
  user: boolean = false
  //declaracao dos servicos e router 
  //router: levar pras tela
  //servicos: troca info entre os componentes
  constructor(private catServ: CategoriaService, private prestServ: PrestadorService,
    private router: Router) {
    // aparentemente, ali no subscribe cria uma funcao onde o parametro é a categoria
    // que bota ela dentro da categoriaInit
    let c
    this.catServ.categoriaSelect.subscribe(categoria => c = categoria)

    let roles = localStorage.getItem('roles')
    if (roles) {
      console.log('1- ', roles);

      if (roles.includes('user')) {
        console.log('aaaaaaaaaa');
        this.user = true
      }
    }

    if (c == 'default message - SERVICE') {
      c = null
    }
    http({
      url: '/lista-prest',
      params: {
        cat: c
      },
      method: 'GET'
    }).then((data) => {
      console.log(data.data);
      if (data.data.length > 0) {
        this.prestadores = data.data
        this.prestadores.sort((a, b) => {
          if (b.avaliacao > a.avaliacao) {
            return 1;
          }
          if (b.avaliacao < a.avaliacao) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        this.erro = 'Nenhum prestador encontrado'
      }

    }).catch((error) => {
      console.log(error);
    })

  }

  sendPrestId(id) {
    console.log(id);
    this.prestServ.setPrestId(id)
    this.router.navigate(['/servico/novo'])
  }

  ngOnInit() {

  }

}
