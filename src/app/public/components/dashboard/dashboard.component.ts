import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: ProductData[] = [
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
    },
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
    },
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
    },
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
    }
  ]

  pages: ProductData[][] = [];
  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;

  constructor(private router: Router) {}

  dashboard() {
    this.router.navigateByUrl('/dashboard')
  }

  ngOnInit() {
    while (this.products.length > 0) {
      var page = this.products.slice(0, 10);
      this.products.splice(0, 10);
      this.pages.push(page);
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
    if (this.selectedPage === this.pages.length - 1) {
      this.showNext = false
    } else {
      this.showNext = true;
    }
  }
}
