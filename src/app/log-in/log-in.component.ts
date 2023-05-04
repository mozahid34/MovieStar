import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  newform:FormGroup;
  errMsg:string = ""
 

constructor(private formBuild:FormBuilder) {
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
  
  }

}
