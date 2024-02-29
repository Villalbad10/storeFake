import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi: string = 'https://fakestoreapi.com';
  public products: any = {};
  constructor(private http: HttpClient) { }

  public listProducts():void {
    this.http.get(`${this.urlApi}/products`).subscribe(res => console.log(res)
    )
  }
}
