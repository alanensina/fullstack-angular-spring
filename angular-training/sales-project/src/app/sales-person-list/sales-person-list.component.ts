import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

// create an array of objects
salesPersonList: SalesPerson[] = [
  new SalesPerson('LeBron', 'James', 'lebron@lakers.com', 53000),
  new SalesPerson('Kobe', 'Bryant', 'kobe@lakers.com', 45700),
  new SalesPerson('Magic', 'Johnson', 'magic@lakers.com', 40200),
  new SalesPerson('Shaquile', `O'Neal`, 'shaq@lakers.com', 33900),
  new SalesPerson('Anthony', 'Davis', 'ad@lakers.com', 22780),
  new SalesPerson('Alex', 'Caruso', 'caruso@lakers.com', 2340)
];

  constructor() { }

  ngOnInit(): void {
  }

}
