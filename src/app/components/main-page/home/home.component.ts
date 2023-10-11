import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private productServices: ProductService
  ){}

  ngOnInit(): void {
    this.loadProductsInfo();
  }
  
  loadProductsInfo(){
    this.productServices.getAllProducts().subscribe(($data)=>{
      this.products = $data;           
    })
  }
}
