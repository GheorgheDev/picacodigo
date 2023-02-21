import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: ProductData[]=[
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59
    }
  ]

  constructor() {};

  ngOnInit(): void {};

}
