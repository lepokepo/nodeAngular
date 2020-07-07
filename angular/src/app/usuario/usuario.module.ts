import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './usuario.service';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { UserReviewComponent } from './user-review/user-review.component';

//ROTAS USER
const routes: Routes = [
  { path: 'usuario/user-login', component: UserLoginComponent },
  { path: 'usuario/novo', component: UserRegisterComponent },
  { path: 'usuario/avalia-list', component: UserReviewComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[RouterModule],
  declarations: [UserLoginComponent, UserRegisterComponent, UserListComponent, UserReviewComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }
