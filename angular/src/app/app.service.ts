import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) {
  }

  validaToken() {
    var yn: boolean
    var httpClient: HttpClient
    httpClient.post('http://localhost:3030/usuario/', {
    }, {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('Authorization')}`
      })
    })
      .subscribe((data: any) => {
        console.log('passo');
        yn = true
      }, (error) => {
        console.log('nao passo');
        this.router.navigate(['/'])
        yn = false
      })
    console.log(yn);
    if (yn == true) { return true }
    else this.router.navigate(['/usuario/user-list'])
  }
}
