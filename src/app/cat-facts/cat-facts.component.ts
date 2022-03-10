import { Component, OnInit } from '@angular/core';
import { CatFactsService } from "../cat-facts.service";
@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.css']
})
export class CatFactsComponent implements OnInit {

  fact: string = "";
  constructor(private catFactsService: CatFactsService) { }

  ngOnInit(): void {
    this.getFact();
  }

  getFact() {
    this.catFactsService.getFact().subscribe(data => this.fact = data.text);
  }

  changeFact() {
    this.getFact();
  }

}
