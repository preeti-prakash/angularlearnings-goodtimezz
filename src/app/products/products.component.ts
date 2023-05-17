import { Component, OnInit } from '@angular/core';
import * as productsDetails from '../../filesysytem/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

    productsList : any = [] ;
   
    ngOnInit() {
    console.log()
    this.productsList = Object.values(productsDetails);
   }

}
