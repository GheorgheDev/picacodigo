import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data';
import * as _ from 'lodash';
import { UserProductServiceService } from './services/user-product-service.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.scss']
})
export class UserProductsComponent implements OnInit {
  products: ProductData[] = [];

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

  user_id = "0"
  user_idFromSS: string | null = sessionStorage.getItem('user_id');


  ngOnInit() {
    if (!!this.user_idFromSS) {
      this.user_id = this.user_idFromSS
    }

    this.userProductService.getAllGamesByUserId(this.user_id)
      .subscribe(result => {
        this.products = result;
      })
  }

  constructor(
    private router: Router,
    private userProductService: UserProductServiceService
  ) {
  }

  userProduct() {
    this.router.navigateByUrl('/user-product')
  }

}