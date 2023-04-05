import { ShoppingCartItemData } from './../../../model/shopping-cart-item-data';
import { EditGameComponent } from './../edit-game/edit-game.component';
import { NeedLoginComponent } from '../../need-login/need-login.component';
import { MatDialog } from '@angular/material/dialog';
import { ModeData } from '../../../model/mode-data';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ProductData } from '../../../model/game-data';
import { PegiData } from '../../../model/pegi-data';
import { GenreData } from '../../../model/genre-data';
import { GamePictureData } from '../../../model/game-picture-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvalidAddtokartComponent } from '../invalid-addtokart/invalid-addtokart.component';
import { ShoppingCartService } from 'src/app/private/services/shopping-cart.service';
import { SharedServicesService } from 'src/app/shared/services/shared-services.service';

@Component({
  selector: 'app-detalles-producto-main',
  templateUrl: './detalles-producto-main.component.html',
  styleUrls: ['./detalles-producto-main.component.scss'],
})
export class DetallesProductoMainComponent implements OnInit {
  // principalPicture: string

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private shoppingItems: ShoppingCartService,
    public sharedServices: SharedServicesService
  ) { }

  selectedGame: ProductData = {} as ProductData

  pegis: PegiData[] = [
    {
      pegi_id: '3',
      name: 'PEGI 3',
    },
    {
      pegi_id: '7',
      name: 'PEGI 7',
    },
    {
      pegi_id: '12',
      name: 'PEGI 12',
    },
    {
      pegi_id: '16',
      name: 'PEGI 16',
    },
    {
      pegi_id: '18',
      name: 'PEGI 18',
    },
    {
      pegi_id: 'OK',
      name: 'PEGI OK',
    },
  ];

  genres: GenreData[] = [
    {
      category_id: '1',
      name: 'Arcade',
    },
    {
      category_id: '4',
      name: 'Aventura',
    },
    {
      category_id: '3',
      name: 'Acción',
    },
    {
      category_id: '5',
      name: 'Carreras',
    },
    {
      category_id: '6',
      name: 'Combate',
    },
    {
      category_id: '7',
      name: 'Deportes',
    },
    {
      category_id: '8',
      name: 'Estrategia',
    },
    {
      category_id: '9',
      name: 'Lógica',
    },
    {
      category_id: '2',
      name: 'Plataformas',
    },
    {
      category_id: '10',
      name: 'Rol',
    },
    {
      category_id: '11',
      name: 'Simulación',
    },
    {
      category_id: '12',
      name: 'Terror',
    },
  ];

  modes: ModeData[] = [
    {
      mode_id: '1',
      name: 'Individual',
    },
    {
      mode_id: '2',
      name: 'Multijugador',
    },
  ];

  gamePictures: GamePictureData[] = [] as GamePictureData[];

  addToKartForm: FormGroup;

  game_id: string = '0';
  game_idFromSS: string | null = sessionStorage.getItem('game_id');

  user_id = "0"
  user_idFromSS: string | null = sessionStorage.getItem('user_id');

  userType: string = '0';
  userTypeFromSS: string | null = sessionStorage.getItem('userType');

  selectedGamePictures: GamePictureData[] = [] as GamePictureData[];
  shoppingCartItems: ShoppingCartItemData[] = [] as ShoppingCartItemData[];
  game: ProductData;

  ngOnInit(): void {
    if (!!this.userTypeFromSS) {
      this.userType = this.userTypeFromSS
    }
    if (!!this.user_idFromSS) {
      this.user_id = this.user_idFromSS
    }
    if (!!this.game_idFromSS) {
      this.game_id = this.game_idFromSS
    }
    this.bringDataFromDB()

    // this.principalPicture = this.selectedGamePictures[0].picture
  }


  bringDataFromDB() {
    this.sharedServices.getAllPicturesByGameId(this.game_id).subscribe({
      next: allPictures => {
        this.gamePictures = allPictures
      },
      error: error => {
        console.log(error);
      }
    });
    this.sharedServices.getGameById(this.game_id).subscribe({
      next: gameSelected => {
        this.selectedGame = gameSelected
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.selectGame();
        this.selectPictures();
        this.createForm();
      }
    });
  }

  createForm() {
    this.addToKartForm = this._fb.group({
      game_quantity: ['1', [Validators.required]],
    });
  }

  selectPictures() {
    for (let i = 0; i < this.gamePictures.length; i++) {
      this.selectedGamePictures.push(this.gamePictures[i]);
    }
    this.initSlides();
  }

  replacePegi(game_pegi_id: string) {
    let pegiSelected = this.pegis.find((pegi) => pegi.pegi_id == game_pegi_id);
    if (!!pegiSelected) this.game.pegi_id = pegiSelected.name;
  }

  replaceGenre(game_category_id: string) {
    let genreSelected = this.genres.find(
      (genre) => genre.category_id == game_category_id
    );
    if (!!genreSelected) this.game.category_id = genreSelected.name;
  }

  replaceMode(game_mode_id: string) {
    let modeSelected = this.modes.find((mode) => mode.mode_id == game_mode_id);
    if (!!modeSelected) this.game.mode_id = modeSelected.name;
  }

  selectGame() {
    this.game = this.selectedGame;
    this.replacePegi(this.game.pegi_id);
    this.replaceGenre(this.game.category_id);
    this.replaceMode(this.game.mode_id);
  }

  addToKart() {
    if (this.userType == '1') {
      if (this.addToKartForm.invalid) {
        this.addToKartForm.markAllAsTouched();
        this.dialog.open(InvalidAddtokartComponent);
      } else {
        if (this.checkShoppingCartHasSpace()) {
          if (this.checkGameIsNotInTheShoppingCartAlready()) {
            let cantidad = this.addToKartForm.get('game_quantity')?.value;
            let shoppingCartItem: ShoppingCartItemData =
              {} as ShoppingCartItemData;
            shoppingCartItem.game_id = this.game_id;
            shoppingCartItem.user_id = this.user_id;
            shoppingCartItem.game_quantity = cantidad;

            this.shoppingItems.addToShoppingCart(shoppingCartItem);

            this.addToKartForm.reset();
          } else {
            alert(
              'El juego ya está en tu carrito de compras, para modificarlo dirigete allí, eliminalo y vuelve! :)'
            );
          }
        } else {
          alert(
            'Solo puedes hacer compras de hasta 5 juegos distintos! Finaliza tu compra y vuelve! :)'
          );
        }

      }
    } else {
      this.dialog.open(NeedLoginComponent);
    }
  }

  checkShoppingCartHasSpace(): boolean {
    let shoppingCartList: ShoppingCartItemData[] = this.shoppingItems.getShoppingCart();
    let permitir: boolean = true;

    if (shoppingCartList.length > 4) {
      permitir = false;
    }
    return permitir;
  }

  checkGameIsNotInTheShoppingCartAlready(): boolean {
    let shoppingCartList: ShoppingCartItemData[] =
      this.shoppingItems.getShoppingCart();
    if (shoppingCartList.length > 0) {
      let permitir: boolean = true;
      shoppingCartList.forEach((shoppingCartElement) => {
        if (shoppingCartElement.game_id == this.game_id) {
          permitir = false;
        }
      });
      return permitir;
    } else {
      return true;
    }
  }

  editGame() {
    this.dialog.open(EditGameComponent);
  }

  @ViewChild('fondoGris') fondoGris: ElementRef;
  @ViewChild('carrusel') carrusel: ElementRef;

  slides: string[] = [];
  i = 0;

  initSlides() {
    for (let j = 0; j < this.selectedGamePictures.length; j++) {
      this.slides.push(this.selectedGamePictures[j].picture);
    }
  }

  obtenerImagen(): string {
    return this.slides[this.i];
  }

  cambiarImagenAnterior(): void {
    this.i === 0 ? (this.i = this.slides.length - 1) : this.i--;
  }

  cambiarImagenSiguiente(): void {
    this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
  }

  mostrarCarrusel(imagenSeleccionada: number): void {
    this.i = imagenSeleccionada;
    (this.fondoGris.nativeElement as HTMLElement).classList.toggle('show');
    (this.carrusel.nativeElement as HTMLElement).classList.toggle('show');
  }

  cerrarCarrusel(): void {
    (this.fondoGris.nativeElement as HTMLElement).classList.toggle('show');
    (this.carrusel.nativeElement as HTMLElement).classList.toggle('show');
  }
}
