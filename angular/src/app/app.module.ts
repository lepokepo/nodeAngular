import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//MODULES
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { PrestadorModule } from './prestador/prestador.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoriaModule,
    UsuarioModule,
    PrestadorModule,
    RouterModule,
    NgbModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



}
