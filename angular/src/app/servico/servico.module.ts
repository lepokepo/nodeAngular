import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { ServRegisterComponent } from './serv-register/serv-register.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'servico/novo', component: ServRegisterComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [ServicoComponent, ServRegisterComponent]
})
export class ServicoModule { }
