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
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: '10',
      modeId: '30'
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: '11',
      modeId: '31'
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: '12',
      modeId: '30'
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: '13',
      modeId: '31'
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: '14',
      modeId: '30'
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: '15',
      modeId: '31'
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: '20',
      modeId: '30'
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: '20',
      modeId: '31'
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: '12',
      modeId: '30'
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: '13',
      modeId: '30'
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: '14',
      modeId: '31'
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