import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {
  products: ProductData[] = [
    {
      name: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      category_id: '10',
      mode_id: '30'
    },
    {
      name: 'Los Sims',
      stars: 3,
      price: 8.99,
      category_id: '11',
      mode_id: '31'
    },
    {
      name: 'Tetris',
      stars: 4,
      price: 6.69,
      category_id: '12',
      mode_id: '30'
    },
    {
      name: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      category_id: '13',
      mode_id: '31'
    },
    {
      name: 'Warcraft',
      stars: 2,
      price: 13.59,
      category_id: '14',
      mode_id: '30'
    },
    {
      name: 'Buscaminas',
      stars: 5,
      price: 13.59,
      category_id: '15',
      mode_id: '31'
    },
    {
      name: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      category_id: '20',
      mode_id: '30'
    },
    {
      name: 'Los Sims',
      stars: 3,
      price: 8.99,
      category_id: '20',
      mode_id: '31'
    },
    {
      name: 'Tetris',
      stars: 4,
      price: 6.69,
      category_id: '12',
      mode_id: '30'
    },
    {
      name: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      category_id: '13',
      mode_id: '30'
    },
    {
      name: 'Warcraft',
      stars: 2,
      price: 13.59,
      category_id: '14',
      mode_id: '31'
    }
  ];

  originalProducts: ProductData[] = [];
  cardGroups: ProductData[][] = [];
  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  gamesPerPage: number = 4;
  cardsOrder: number;
  groupSale: ProductData[] = [];
  groupSold: ProductData[] = [];
  groupBought: ProductData[] = [];

  constructor(private router: Router) {
  }

  userProduct() {
    this.router.navigateByUrl('/user-product')
  }

  ngOnInit() {
  }
}