import { Component, Injectable } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  image?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductsSmall(): Promise<Product[]> {
    return Promise.resolve([
      { id: 1, name: 'Laptop', price: 1000, inventoryStatus: 'INSTOCK', image:'https://i.pinimg.com/736x/74/8e/51/748e51a80f29b4c6dd6946cbc56fe3a9.jpg', description: 'A smart phone' },
      { id: 4, name: 'Headphones 1', price: 200, inventoryStatus: 'OUTOFSTOCK', image: 'https://i.pinimg.com/736x/25/cd/f0/25cdf0c6b7c53a31121fd31e8ed23b0f.jpg', description: 'Noise cancelling headphones' },
      { id: 5, name: 'Headphones 2', price: 200, inventoryStatus: 'OUTOFSTOCK', image: 'https://i.pinimg.com/736x/f8/b6/55/f8b65517d86253420a96b3da8f9b631f.jpg', description: 'Noise cancelling headphones' },
      { id: 6, name: 'Headphones 3', price: 200, inventoryStatus: 'OUTOFSTOCK', image: 'https://i.pinimg.com/736x/44/13/27/4413273cacd0e6b1361d611d119915f5.jpg', description: 'Noise cancelling headphones' },
      { id: 7, name: 'Headphones 4', price: 200, inventoryStatus: 'OUTOFSTOCK', image: 'https://i.pinimg.com/736x/78/45/8d/78458d9934a0ae15318950c77617df7a.jpg', description: 'Noise cancelling headphones' },

    ]);
  }
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent {
  products: Product[] = [];
  responsiveOptions: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then((products: Product[]) => {
      this.products = products;
    });

    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
      { breakpoint: '767px', numVisible: 2, numScroll: 1 },
      { breakpoint: '575px', numVisible: 1, numScroll: 1 }
    ];
  }

  getSeverity(inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK') {
    switch (inventoryStatus) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warn';
      case 'OUTOFSTOCK': return 'danger';
      default: return undefined;  // Changed from '' to undefined
    }
  }
}
