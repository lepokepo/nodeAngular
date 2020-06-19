import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestadorComponent } from './prestador.component';
import { PrestRegisterComponent } from './prest-register/prest-register.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PrestListComponent } from './prest-list/prest-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';


//fazendo as rotas precisa modificar na navbar e no app-routing module pra funfar
const routes: Routes = [
  { path: 'prestador/novo', component: PrestRegisterComponent },
  { path: 'prestador/lista', component: PrestListComponent },
  { path: 'prestador/todo-list', component: TodoListComponent },
];

@NgModule({
  declarations: [PrestadorComponent, PrestRegisterComponent, PrestListComponent, TodoListComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class PrestadorModule { }
