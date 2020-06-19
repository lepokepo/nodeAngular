import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import http from 'src/app/http.service'
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Array<any>
  erro: String

  constructor(private router: Router, private cat: CategoriaService) {
    http({
      url: '/lista-cat-qnt',
      method: 'GET',
    }).then((data) => {
      this.categorias = data.data
    }).catch((error) => {
      this.erro = error.error
    })

  }

  send(c) {
    this.cat.changeCat(c)
  }

  ngOnInit(): void {
  }

}
