import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private productService:ProductsService) { }

  listProducts(): void {
    console.log('entra');

    this.productService.listProducts();
  }
}
