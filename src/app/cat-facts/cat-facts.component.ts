import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactsService } from "../cat-facts.service";
import { repeat } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css']
})
export class CatFactsComponent implements OnInit {

  fact!: Observable<any>;
  loggedIn = false;
  constructor(
    private catFactsService: CatFactsService,
    private router: Router,
    private authenticationservice: AuthenticationService,
    ) { }

  ngOnInit(): void {
    this.check();
    this.getFact();
    console.log(this.authenticationservice.token);
  }

  getFact() {
    if(this.loggedIn === true){
      this.fact = this.catFactsService.getFact();
    }
  }

  changeFact() {
    if(this.loggedIn === true){
      this.fact = this.fact.pipe(repeat(1));
    }
    else{
      alert('you are not logged in');
    }
  }
  check(){
    if(this.authenticationservice.token){
      this.loggedIn = true;
    }
  }
}
