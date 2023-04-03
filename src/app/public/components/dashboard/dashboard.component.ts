import { OrdinationComponent } from './../../../shared/components/ordination/ordination.component';
import { SelectedFilter } from '../../../shared/models/filter-element';
import { FiltersComponent } from '../../../shared/components/filters/filters.component';
import { Router } from '@angular/router';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ProductData } from 'src/app/shared/models/product-data';
import { DashboardService } from './services/dashboard-service.service';
import { result } from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: ProductData[] = [
    /* {
      name: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      category_id: '10',
      mode_id: '30'
    },
    {
      game_id: '2',
      name: 'Los Sims',
      stars: 3,
      price: 8.99,
      category_id: '11',
      mode_id: '31'
    },
    {
      game_id: '3',
      name: 'Tetris',
      stars: 4,
      price: 6.69,
      category_id: '12',
      mode_id: '30'
    },
    {
      game_id: '4',
      name: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      category_id: '13',
      mode_id: '31'
    },
    {
      game_id: '5',
      name: 'Warcraft',
      stars: 2,
      price: 13.59,
      category_id: '14',
      mode_id: '30'
    },
    {
      game_id: '6',
      name: 'Buscaminas',
      stars: 5,
      price: 13.59,
      category_id: '15',
      mode_id: '31'
    },
    {
      game_id: '7',
      name: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      category_id: '20',
      mode_id: '30'
    },
    {
      game_id: '8',
      name: 'Los Sims',
      stars: 3,
      price: 8.99,
      category_id: '20',
      mode_id: '31'
    },
    {
      game_id: '9',
      name: 'Tetris',
      stars: 4,
      price: 6.69,
      category_id: '12',
      mode_id: '30'
    },
    {
      game_id: '10',
      name: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      category_id: '13',
      mode_id: '30'
    },
    {
      game_id: '11',
      name: 'Warcraft',
      stars: 2,
      price: 13.59,
      category_id: '14',
      mode_id: '31'
    },
    {
      game_id: '12',
      name: 'Buscaminas',
      stars: 5,
      price: 13.59,
      category_id: '15',
      mode_id: '30'
    },
    {
      game_id: '13',
      name: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      category_id: '20',
      mode_id: '30'
    },
    {
      game_id: '14',
      name: 'Los Sims',
      stars: 3,
      price: 8.99,
      category_id: '20',
      mode_id: '30'
    },
    {
      game_id: '15',
      name: 'Tetris',
      stars: 4,
      price: 6.69,
      category_id: '12',
      mode_id: '30'
    },
    {
      game_id: '16',
      name: 'Resident Evil 4',
      stars: 1,
      price: 36.99,
      category_id: '14',
      mode_id: '30'
    },
    {
      game_id: '17',
      name: 'Warcraft',
      stars: 2,
      price: 13.59,
      category_id: '13',
      mode_id: '30'
    },
    {
      game_id: '18',
      name: 'Buscaminas',
      stars: 5,
      price: 13.59,
      category_id: '14',
      mode_id: '30'
    },
    {
      game_id: '19',
      name: 'Prince of Persia',
      stars: 1,
      price: 13.59,
      category_id: '15',
      mode_id: '30'
    },
    {
      game_id: '20',
      name: 'Los Sims',
      stars: 3,
      price: 8.99,
      category_id: '14',
      mode_id: '31'
    },
    {
      game_id: '21',
      name: 'Tetris',
      stars: 4,
      price: 6.69,
      category_id: '20',
      mode_id: '30'
    } */
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


  constructor(private router: Router,
              public dasboardService: DashboardService ) {
              this.filteredGames = [];
  }

  dashboard() {
    this.router.navigateByUrl('/dashboard')
  }

  ngOnInit() {
    this.dasboardService.getAllGames().subscribe(result => {
      console.log(result)
      this.products = result

    this.dasboardService.getAllGames_picture().subscribe(result => {
      console.log(result)
      this.products = result
    })


      this.paginarResultados(true);
      this.onWindowResize();
    })
  }
  

  @Input() filterInfo: FiltersComponent;
  chosenGenreFilters: string[] = [];
  chosenModeFilters: string[] = [];
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

    if (this.chosenGenreFilters.length > 0 || this.chosenModeFilters.length > 0) {
      var generateGenreFilterArray: ProductData[] = [];
      var generateModeFilterArray: ProductData[] = [];

      for (var i = 0; i < this.chosenGenreFilters.length; i++) {
        generateGenreFilterArray = finalList.filter(element => element.category_id === this.chosenGenreFilters[i]);
        for (var z = 0; z < generateGenreFilterArray.length; z++) {
          if (this.filteredGames.indexOf(generateGenreFilterArray[z]) == -1)
            this.filteredGames.push(generateGenreFilterArray[z])
        }
      }

      for (var i = 0; i < this.chosenModeFilters.length; i++) {
        if (generateGenreFilterArray.length > 0) {
          generateModeFilterArray = generateGenreFilterArray.filter(element => element.mode_id === this.chosenModeFilters[i])

        } else {
          generateModeFilterArray = finalList.filter(element => element.mode_id === this.chosenModeFilters[i])
        }
        this.filteredGames = [];
        generateModeFilterArray.forEach(element => this.filteredGames.push(element))
      }
      finalList = this.filteredGames;

    } else {
      finalList
    }


    if (this.cardsOrder == 41) {
      finalList.sort((a, b) => a.price - b.price);

    } else if (this.cardsOrder == 42) {
      finalList.sort((a, b) => b.price - a.price);

    } else {
      finalList.sort((a, b) => b.stars - a.stars);
    }


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
    } else {
      this.chosenGenreFilters.length = 0;
      this.chosenModeFilters.length = 0;
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