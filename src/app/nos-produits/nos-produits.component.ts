import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['./nos-produits.component.css']
})
export class NosProduitsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products=[
      {name:"a",detail:"aaaa",price:1},
      {name:"b",detail:"bbbb",price:2},
      {name:"c",detail:"cccc",price:3},
      {name:"d",detail:"dddd",price:4}
    ]

  }

}
