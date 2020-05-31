import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(private router: Router) {
  }

  getItens() {
    return ['item1', 'item2', 'item3', 'item4']
  }


}
