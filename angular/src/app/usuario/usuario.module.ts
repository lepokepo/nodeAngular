import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    CommonModule
  ],
  exports: [UserLoginComponent],
  declarations: [UserLoginComponent, UserRegisterComponent, UserListComponent, UserHomeComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }
