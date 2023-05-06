import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../Service/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  newform:FormGroup;
  errMsg:string = ""
 

constructor(private formBuild:FormBuilder, private auth: AuthService, private route:Router) {
  this.newform = this.formBuild.group({
    email:'',
    pass:'',
    
  });
}


  ngOnInit(): void {
    
    
  }
  onLogIn() {
    if ((this.newform.value.email).trim().length === 0) {
      this.errMsg = "Email is Required"
    }
    else if ((this.newform.value.pass).trim().length === 0) {
      this.errMsg = "Password is Required"
      
    }
    else {
    
      this.errMsg = "";
      let res = this.auth.logIn(this.newform.value.email, this.newform.value.pass);

      if (res === 200) {
        this.route.navigate(['home']);
      }
      else if (res === 403) {
        this.errMsg = "Email or Password may invalid";
      }
    }
  
  }

}
