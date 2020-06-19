import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  private prestFonte = new BehaviorSubject('default message - PRESTADOR');
  prest_id = this.prestFonte.asObservable();

  constructor() { }

  setPrestId(prest_id: string) {
    this.prestFonte.next(prest_id)
  }
}
