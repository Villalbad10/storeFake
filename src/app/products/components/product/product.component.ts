import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Category, SearchResponse } from '../../interfaces/produc.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.listProducts();
  }

  get listProducts():SearchResponse[] {
    return this.productService.products;
  }
}
