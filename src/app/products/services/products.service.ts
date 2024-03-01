import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse } from '../interfaces/produc.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi: string = 'https://fakestoreapi.com';
  public products: SearchResponse[] = [];
  constructor(private http: HttpClient) { }

  public listProducts(): void {
    this.http.get<SearchResponse[]>(`${this.urlApi}/products`).subscribe(res => {
      this.products = res
    })
  }
}
