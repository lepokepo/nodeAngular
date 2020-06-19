import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriaFonte = new BehaviorSubject('default message - SERVICE');
  categoriaSelect = this.categoriaFonte.asObservable();

  constructor() { }

  changeCat(categoria: string) {
    this.categoriaFonte.next(categoria)
  }

}
