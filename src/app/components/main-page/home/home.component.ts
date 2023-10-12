import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  currentProducts: Product[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private productServices: ProductService
  ){}

  ngOnInit(): void {
    this.loadProductsInfo();
    this.subscribePaginator();
  }
  
  loadProductsInfo(){
    this.productServices.getAllProducts().subscribe(($data)=>{
      this.products = $data;
      this.updateProducts();
    })
  }

  updateProducts() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.currentProducts = this.products.slice(startIndex, endIndex);
  }

  subscribePaginator(){
    this.paginator.page.subscribe(()=>{
      this.updateProducts();
    })
  }
}
