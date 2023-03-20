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
    this.paginarResultados()
  }


  private paginarResultados() {

    let groupList: ProductData[] = [];
    this.products.forEach(element => groupList.push(element));

    var groupByStatus = _.groupBy(groupList, 'status')

    groupByStatus.sale.forEach(element => this.groupSale.push(element))
    groupByStatus.sold.forEach(element => this.groupSold.push(element))
    groupByStatus.bought.forEach(element => this.groupBought.push(element))

    let finalList: ProductData[] = [];
    this.groupSale.forEach(element => finalList.push(element))

    this.cardGroups = [];

    while (finalList.length > 0) {
      var pageSale = groupByStatus.sale.slice(0, this.gamesPerPage);
      var pageSold = groupByStatus.sold.slice(0, this.gamesPerPage);
      var pageBought = groupByStatus.bought.slice(0, this.gamesPerPage);


      finalList.splice(0, this.gamesPerPage)
      this.cardGroups.push(pageSale)
      this.cardGroups.push(pageSold)
      this.cardGroups.push(pageBought)


      console.log("1", finalList)
      console.log("2", this.cardGroups)

      if (this.cardGroups.length > 1)
        this.showNext = true;
      else
        this.showNext = false;

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