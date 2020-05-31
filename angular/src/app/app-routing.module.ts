import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './usuario/user-login/user-login.component';
import { UserRegisterComponent } from './usuario/user-register/user-register.component';
import { UserListComponent } from './usuario/user-list/user-list.component';
import { UserHomeComponent } from './usuario/user-home/user-home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  //ROTAS USER
  { path: 'usuario/user-list', component: UserListComponent },
  { path: 'usuario/user-home', component: UserHomeComponent },
  { path: 'usuario/user-login', component: UserLoginComponent },
  { path: 'usuario/user-register', component: UserRegisterComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
