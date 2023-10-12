import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const productId = params.get('id') ?? "1";
      this.loadProduct(parseInt(productId))
    })
  }

  loadProduct(id: number){
    this.productService.getProductById(id).subscribe((product: Product)=>{
      this.productDetail = product;
    })
  }
}
