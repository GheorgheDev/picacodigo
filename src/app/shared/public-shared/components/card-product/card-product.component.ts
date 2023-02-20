import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from '../../model/product-data';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: ProductData;
  constructor() {}

  ngOnInit(): void {
    
  }

}