import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import Axios from 'axios';
import http from 'src/app/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularNode';

  constructor(private router: Router) { }
  logged: boolean;

  checkLog() {
    if (localStorage.getItem('token')) {

      // http({
      //   method: 'POST',
      //   url: '/login',
      // }).then((data) => {
      //   console.log(data.data);

      // }).catch((error) => {
      //   console.log(error.error);

      // })

      this.logged = true
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  ngOnInit() {
    this.checkLog()
  }
}
