import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private userFonte = new BehaviorSubject('default message - USER');
  user_id = this.userFonte.asObservable();

  constructor() { }

  setUserId(user_id: string) {
    this.userFonte.next(user_id.toString())
  }

}
