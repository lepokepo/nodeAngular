import { Component, OnInit } from '@angular/core';

import http from 'src/app/http.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  servicos: Array<any>

  constructor() {
    http({
      method: 'GET',
      url: '/servico/todo-list'
    }).then((data) => {
      console.log(data.data);

    }).catch((erro) => {
      console.log(erro);

    })
  }

  ngOnInit(): void {
  }

}
