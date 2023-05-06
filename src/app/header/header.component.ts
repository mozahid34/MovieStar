import { Component } from '@angular/core';
import { AuthService } from '../Service/Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth: AuthService) {}

  LogOut() {
    console.log("clicked");
    alert("LogOut From Your Account?");
    this.auth.logOut();
  
  }

}
