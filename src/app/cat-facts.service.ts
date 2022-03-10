import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  private catFactUrl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';

  constructor(
    private http: HttpClient
  ) { }

  getFact(): Observable<any>{
    return this.http.get(this.catFactUrl);
  }
}
