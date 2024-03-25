
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `<h2>Product Page - {{productId}}</h2>`,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId: string; 

  constructor(private route: ActivatedRoute) {
    this.productId = ''; 
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || ''; 
  }
}
