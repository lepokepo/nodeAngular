import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) {
  }
  //a mensagem que ganhar de parametro vai ser mostrada
  callSb(msg, err) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
    if (err) x.style.backgroundColor = "#c3272f";
    else x.style.backgroundColor = "#00bd6e";
    x.innerHTML = msg
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

}
