import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public products:any;
  public keyword:string="";
  constructor() {

  }
  ngOnInit(): void {
      this.products = [
        {"id": 1, "name": "computer", "price": 4300},
        {"id": 2, "name": "printer", "price": 3255},
        {"id": 3, "name": "mouse", "price": 111},
        {"id": 4, "name": "smart phone", "price": 2100}
      ]
  }
  deleteProduct(p:any){
    let index = this.products.indexOf(p);
    this.products.splice(index,1);
  }
  search(){
    
    this.products = this.products.filter((p:any)=>p.name.includes(this.keyword));
  }
}
