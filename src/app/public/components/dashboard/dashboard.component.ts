import { OrdinationComponent } from './../../../shared/components/ordination/ordination.component';
import { SelectedFilter } from '../../../shared/models/filter-element';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
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
      price: 13.59,
      genreId: 10,
      modeId: 30
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 11,
      modeId: 31
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 12,
      modeId: 30
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: 13,
      modeId: 31
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: 14,
      modeId: 30
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: 15,
      modeId: 31
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: 20,
      modeId: 30
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 20,
      modeId: 31
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 12,
      modeId: 30
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: 13,
      modeId: 30
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: 14,
      modeId: 31
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: 15,
      modeId: 30
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: 20,
      modeId: 30
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 20,
      modeId: 30
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 12,
      modeId: 30
    },
    {
      title: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      genreId: 14,
      modeId: 30
    },
    {
      title: 'Warcraft',
      stars: 2,
      price: 13.59,
      genreId: 13,
      modeId: 30
    },
    {
      title: 'Buscaminas',
      stars: 5,
      price: 13.59,
      genreId: 14,
      modeId: 30
    },
    {
      title: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      genreId: 15,
      modeId: 30
    },
    {
      title: 'Los Sims',
      stars: 3,
      price: 8.99,
      genreId: 14,
      modeId: 31
    },
    {
      title: 'Tetris',
      stars: 4,
      price: 6.69,
      genreId: 20,
      modeId: 30
    }
  ]

  originalProducts: ProductData[] = [];
  pages: ProductData[][] = [];
  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  filteredGames: ProductData[] = [];

  constructor(private router: Router) { }

  dashboard() {
    this.router.navigateByUrl('/dashboard')
  }

  ngOnInit() {
    this.paginarResultados(true, this.products);
  }

  @Input() filterInfo: FiltersComponent;
  chosenGenreFilters: number[];
  chosenModeFilters: number[];
  newOptions: number;

  @Input() orderInfo: OrdinationComponent;
  chosenOrder: number;

  private paginarResultados(sobreescribirOriginales: boolean, finalList: ProductData[]) {
    while (finalList.length > 0) {
      var page = finalList.slice(0, 8);
      finalList.splice(0, 8);
      this.pages.push(page);
      if (this.pages.length > 1)
        this.showNext = true;
      else
        this.showNext = false;

      if (sobreescribirOriginales)
        page.forEach(product => this.originalProducts.push(product));


    };


  }

  addNewOptions(newOptions: SelectedFilter) {
    this.chosenGenreFilters = newOptions.genres;
    this.chosenModeFilters = newOptions.modes;

    this.filterCards();
  }

  orderCardsElements(finalList: ProductData[]) {
    if (this.chosenOrder === 40) {
      console.log("es 40", this.chosenOrder)
    }
    this.paginarResultados(false, this.products);
  }


  filterCards() {
    this.pages = [];
    this.filteredGames = [];
    this.selectedPage = 0;

    for (var i = 0; i < this.chosenGenreFilters.length; i++) {
      var generateGenreFilterArray = this.originalProducts.filter(element => element.genreId === this.chosenGenreFilters[i])
      for (var z = 0; z < generateGenreFilterArray.length; z++) {
        if (this.filteredGames.indexOf(generateGenreFilterArray[z]) == -1)
          this.filteredGames.push(generateGenreFilterArray[z])
      }
    }

    for (var i = 0; i < this.chosenModeFilters.length; i++) {
      var generateModeFilterArray = this.originalProducts.filter(element => element.modeId === this.chosenModeFilters[i])
      for (var z = 0; z < generateModeFilterArray.length; z++) {
        if (this.filteredGames.indexOf(generateModeFilterArray[z]) == -1)
          this.filteredGames.push(generateModeFilterArray[z])
      }
    }

    this.showPrevious = false;

    if (this.chosenGenreFilters.length > 0 || this.chosenModeFilters.length > 0) {
      this.paginarResultados(false, this.filteredGames)
    } else {
      for (var x = 0; x < this.originalProducts.length; x++) {
        this.products.push(this.originalProducts[x])
      }
      this.paginarResultados(false, this.products)
    }
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