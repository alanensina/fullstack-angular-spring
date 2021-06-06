import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('John', 'James', 'john@esncorp.com', 53000),
    new SalesPerson('Marie', 'Simpson', 'marie@esncorp.com', 45700),
    new SalesPerson('Phill', 'Johnson', 'phil@esncorp.com', 12560),
    new SalesPerson('Karl', `O'Neal`, 'karl@esncorp.com', 33900),
    new SalesPerson('Anthony', 'Scottie', 'anthony@esncorp.com', 17569),
    new SalesPerson('Jully', 'Tenezzi', 'jully@esncorp.com', 2340)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
