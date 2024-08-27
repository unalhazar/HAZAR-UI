import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../../api/default.service';
import { Product } from '../../../model/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="products.length > 0">
      <h2>Product List</h2>
      <ul>
        <li *ngFor="let product of products">
          {{ product.name }} - {{ product.price }}$
        </li>
      </ul>
    </div>
    <div *ngIf="products.length === 0">
      No products available.
    </div>
  `,
  styles: [`
    h2 {
      color: #2c3e50;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 5px 0;
      font-size: 18px;
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: DefaultService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
