import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL: string = "https://fakestoreapi.com";

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
