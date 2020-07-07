import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularNode';

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.checkLog()
      }
    });
  }

  username: String


  logged: boolean;

  prest: boolean;
  user: boolean;
  adm: boolean;

  checkLog() {
    if (localStorage.getItem('token') || localStorage.getItem('roles') || localStorage.getItem('user')) {
      let roles = localStorage.getItem('roles')

      if (roles.includes('prestador')) {
        console.log('prestador - log');
        this.prest = true
      }
      if (roles.includes('adm')) {
        console.log('adm - log');
        this.adm = true
      }
      if (roles.includes('user')) {
        console.log('user - log');
        this.user = true
      }
      let fst = localStorage.getItem('user').split(' ')
      this.username = fst[0]
      this.logged = true
    }
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

  ngOnInit() {
    this.checkLog()
  }
}
