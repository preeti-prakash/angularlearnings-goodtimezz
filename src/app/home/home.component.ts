import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
      constructor(private router : Router, private primengConfig: PrimeNGConfig){
      }

      ngOnInit(){
        this.primengConfig.ripple = true;
      }

      goToProductsPage(){
        this.router.navigate(["/products"]);
      }

      goToSalesPage(){
        this.router.navigate(["/sales"]);
      }
}
