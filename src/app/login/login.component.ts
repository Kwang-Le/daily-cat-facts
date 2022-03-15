import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: string = "";
  password: string = "";
  constructor(
    private router: Router,
    private authenticationservice: AuthenticationService,
    ) { }

  ngOnInit(): void {
    console.log("what");
    console.log(this.authenticationservice.token);
  }

  onSubmit(){
    if(this.authenticationservice.logIn(this.user, this.password)){
      this.router.navigate(['/cat-fact']);
    }
  }

}
