import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
//create an array of objects

salesPersonList: SalesPerson[] = [
  new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 5000),
  new SalesPerson("John", "Doe", "john.doe@gmail.com", 7000),
  new SalesPerson("Gary", "Oh", "gary.oh@gmail.com", 4000),
  new SalesPerson("Leah", "Connor", "leah.connor@gmail.com", 9000)
];
  constructor() { }

  ngOnInit(): void {
  }

}
