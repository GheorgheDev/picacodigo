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
      genreId: 10,
      modeId: 30,
      status: 'sold'
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 11,
      modeId: 31,
      status: 'sale'
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 12,
      modeId: 30,
      status: 'bought'
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: 13,
      modeId: 31,
      status: 'sold'
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: 14,
      modeId: 30,
      status: 'sale'
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: 15,
      modeId: 31,
      status: 'bought'
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: 20,
      modeId: 30,
      status: 'sold'
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 20,
      modeId: 31,
      status: 'sale'
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 12,
      modeId: 30,
      status: 'bought'
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: 13,
      modeId: 30,
      status: 'sold'
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: 14,
      modeId: 31,
      status: 'sale'
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: 15,
      modeId: 30,
      status: 'bought'
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: 20,
      modeId: 30,
      status: 'sold'
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 20,
      modeId: 30,
      status: 'sale'
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 12,
      modeId: 30,
      status: 'bought'
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: 14,
      modeId: 30,
      status: 'sold'
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: 13,
      modeId: 30,
      status: 'sale'
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: 14,
      modeId: 30,
      status: 'bought'
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: 15,
      modeId: 30,
      status: 'sold'
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 14,
      modeId: 31,
      status: 'sale'
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 20,
      modeId: 30,
      status: 'bought'
    }
  ];

  originalProducts: ProductData[] = [];
  cardGroups: ProductData[][] = [];
  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  gamesPerPage: number = 12;
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
    this.paginarResultados(true);
  }

  private groupSeparator() {
    let groupList: ProductData[] = [];
    this.products.forEach(element => groupList.push(element));

    var groupByStatus = _.groupBy(groupList, 'status')

    this.groupSale = groupByStatus.sale
    this.groupSold = groupByStatus.sold
    this.groupBought = groupByStatus.bought
  }

  private paginarResultados(sobreescribirOriginales: boolean) {
    let finalList: ProductData[] = [];
    this.products.forEach(element => finalList.push(element))

    this.groupSeparator()

    // this.groupSale = _.first(groupByStatus)


    this.cardGroups = [];

    while (finalList.length > 0) {
      var page = finalList.slice(0, this.gamesPerPage);
      finalList.splice(0, this.gamesPerPage);

      this.cardGroups.push(page);
      if (this.cardGroups.length > 1)
        this.showNext = true;
      else
        this.showNext = false;

      if (sobreescribirOriginales)
        page.forEach(product => this.originalProducts.push(product));
    };
  }

  previousPage() {
    this.selectedPage--
    this.showNext = true;
    if (this.selectedPage !== 0) {
      this.showPrevious = true;
    } else {
      this.showPrevious = false;
    }
  }

  nextPage() {
    this.selectedPage++
    this.showPrevious = true;
    if (this.selectedPage === this.cardGroups.length - 1) {
      this.showNext = false
    } else {
      this.showNext = true;
    }
  }
}