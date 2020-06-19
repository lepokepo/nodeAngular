import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//HOME
import { HomeComponent } from './home/home.component';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';
import { PrestadorModule } from './prestador/prestador.module';
import { ServicoModule } from './servico/servico.module';

const routes: Routes = [
  //ROTAS GENERICAS
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CategoriaModule,
    PrestadorModule,
    UsuarioModule,
    ServicoModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
