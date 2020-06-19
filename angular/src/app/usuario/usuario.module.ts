import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './usuario.service';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';

//ROTAS USER
const routes: Routes = [
  { path: 'usuario/user-login', component: UserLoginComponent },
  { path: 'usuario/novo', component: UserRegisterComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[RouterModule],
  declarations: [UserLoginComponent, UserRegisterComponent, UserListComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }
