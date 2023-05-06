import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  logIn(email:string, pass:string) {
    if (email === 'aymanmozahid@gmail.com' && pass === '12345') {
      return 200;
    }
    else {
      return 403;
    }

  }

  logOut() {
    this.route.navigate(['logIn']);
  }
}
