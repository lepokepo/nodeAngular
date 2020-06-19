import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { Routes, RouterModule } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaRegisterComponent } from './categoria-register/categoria-register.component';


//ROTAS CATEGORIAS do front
const routes: Routes = [
  { path: 'categoria/lista', component: CategoriaListComponent },
  { path: 'categoria/nova', component: CategoriaRegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [CategoriaListComponent, CategoriaRegisterComponent],
})
export class CategoriaModule { }
