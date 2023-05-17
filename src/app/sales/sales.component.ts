import { Component, OnInit } from '@angular/core';
import * as salesDetails from '../../filesysytem/sales.json';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  salesList : any = [];
  ngOnInit() {
      this.salesList = Object.values(salesDetails);
  }
  
}
