import { OrdinationComponent } from './../../../shared/components/ordination/ordination.component';
import { SelectedFilter } from '../../../shared/models/filter-element';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { Router } from '@angular/router';
import { Component, OnInit, Input, HostListener } from '@angular/core';
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
  ];

  originalProducts: ProductData[] = [];
  pages: ProductData[][] = [];
  selectedPage: number = 0;
  showNext: boolean = true;
  showPrevious: boolean = false;
  filteredGames: ProductData[];
  toSortList: ProductData[] = [];
  getScreenWidth: number;
  gamesPerPage: number = 12;
  cardsOrder: number;


  constructor(private router: Router) {
    this.filteredGames = [];
  }

  dashboard() {
    this.router.navigateByUrl('/dashboard')
  }

  ngOnInit() {
    // this.products.forEach(product => this.originalProducts.push(product));
    this.paginarResultados(true);
    this.onWindowResize();
  }

  @Input() filterInfo: FiltersComponent;
  chosenGenreFilters: number[] = [];
  chosenModeFilters: number[] = [];
  newOptions: number;

  @Input() orderInfo: OrdinationComponent;
  chosenOrder: number;

  filterCards() {
    this.pages = [];
    this.filteredGames = [];
    this.selectedPage = 0;
    this.showPrevious = false;
  }

  orderCardsElements(chosenOrder: number) {
    this.cardsOrder = chosenOrder;
    this.paginarResultados(false)
  }

  private paginarResultados(sobreescribirOriginales: boolean) {
    let finalList: ProductData[] = [];
    this.products.forEach(element => finalList.push(element))

    this.pages = [];


    console.log("3 originals", this.originalProducts)
    console.log("3 final", finalList)




    if (this.chosenOrder == 41) {
      finalList.sort(function (a, b) {
        if (a.price > b.price) {
          return 1
        } else if (a.price < b.price) {
          return -1
        } else {
          return 0
        }
      })
    } else if (this.chosenOrder == 42) {
      finalList.sort(function (a, b) {
        if (a.price > b.price) {
          return -1
        } else if (a.price < b.price) {
          return 1
        } else {
          return 0
        }
      })
    } else {
      finalList.sort(function (a, b) {
        if (a.stars > b.stars) {
          return -1
        } else if (a.stars < b.stars) {
          return 1
        } else {
          return 0
        }
      });
    }

    // console.log("2", finalList)

    if (this.chosenGenreFilters.length > 0 || this.chosenModeFilters.length > 0) {
      for (var i = 0; i < this.chosenGenreFilters.length; i++) {
        var generateGenreFilterArray = finalList.filter(element => element.genreId === this.chosenGenreFilters[i])
        for (var z = 0; z < generateGenreFilterArray.length; z++) {
          if (this.filteredGames.indexOf(generateGenreFilterArray[z]) == -1)
            this.filteredGames.push(generateGenreFilterArray[z])
        }
      }

      console.log("3 filteredGamesGenre", this.filteredGames)


      for (var i = 0; i < this.chosenModeFilters.length; i++) {
        var generateModeFilterArray = finalList.filter(element => element.modeId === this.chosenModeFilters[i])
        for (var z = 0; z < generateModeFilterArray.length; z++) {
          if (this.filteredGames.indexOf(generateModeFilterArray[z]) == -1)
            this.filteredGames.push(generateModeFilterArray[z])
        }
      }

      console.log("4 filteredGamesGenre", this.filteredGames)


      finalList = this.filteredGames;

      console.log("5", finalList)
    }

    // console.log("6", finalList)

    while (finalList.length > 0) {
      var page = finalList.slice(0, this.gamesPerPage);
      finalList.splice(0, this.gamesPerPage);

      this.pages.push(page);
      if (this.pages.length > 1)
        this.showNext = true;
      else
        this.showNext = false;

      if (sobreescribirOriginales)
        page.forEach(product => this.originalProducts.push(product));
    };
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;

    if (this.getScreenWidth < 481) {
      this.gamesPerPage = 3;
    } else if (this.getScreenWidth < 1024) {
      this.gamesPerPage = 6;
    } else {
      this.gamesPerPage = 12;
    }

    this.pages = [];
    this.paginarResultados(false);
  }

  addNewOptions(newOptions: SelectedFilter) {
    if (newOptions.genres.length > 0 || newOptions.modes.length > 0) {
      this.chosenGenreFilters = newOptions.genres;
      this.chosenModeFilters = newOptions.modes;
    }

    this.paginarResultados(false)
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