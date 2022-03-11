import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  token: string = "";
  constructor() { }

  logIn(username: string, password: string): boolean{
    if(username && password){
      this.token = "thisisyourkey";
      return true;
    }
    else{
      return false;
    }
  }
  logOut(): void{
    this.token = "";
  }
}
