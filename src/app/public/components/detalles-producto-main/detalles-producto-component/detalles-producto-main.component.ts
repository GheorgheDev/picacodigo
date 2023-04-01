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

@Component({
  selector: 'app-detalles-producto-main',
  templateUrl: './detalles-producto-main.component.html',
  styleUrls: ['./detalles-producto-main.component.scss'],
})
export class DetallesProductoMainComponent implements OnInit {
  /* usertype= 1 es un usuario logeado */
  /* usertype= 2 es un admin */

  userType: string = '1';

  constructor(
    private _fb: FormBuilder,
    public dialog: MatDialog,
    private shoppingItems: ShoppingCartService
  ) {}
  games: ProductData[] = [
    {
      game_id: 'fa6ca618-2851-47d4-930f-0b510b40fed2',
      name: 'Red Dead Redemption II',
      distributor: 'Rockstar Games',
      stars: 5,
      description:
        'Space invaders	Arcade	Si	No	Midway Games	Space Invaders es un videojuego arcade de disparos desarrollado por Taito y lanzado en 1978. El juego presenta una serie de alienígenas que se mueven de un lado a otro en la pantalla, mientras el jugador controla un cañón situado en la parte inferior de la pantalla para dispararles y defenderse. A medida que el juego avanza, la velocidad y la dificultad aumentan, y los alienígenas se mueven más rápido y atacan con mayor frecuencia. \n Space Invaders fue uno de los primeros juegos arcade en alcanzar un gran éxito comercial y es considerado uno de los juegos más influyentes de la historia de los videojuegos. Su mecánica simple y adictiva, así como su diseño de personajes y efectos de sonido icónicos, lo han convertido en un símbolo de la cultura popular. El juego ha sido portado a numerosas consolas y dispositivos, y ha inspirado una gran cantidad de secuelas y adaptaciones.',
      pegi_id: '3',
      category_id: '10',
      mode_id: '1',
      price: 54.99,
      stock: 100,
    },
    {
      game_id: '2',
      name: 'Super Mario Odyssey',
      distributor: 'Nintendo',
      stars: 4,
      description:
        'Super Mario Odyssey es un videojuego de plataformas desarrollado y publicado por Nintendo. Fue lanzado mundialmente el 27 de octubre de 2017 para Nintendo Switch. El juego es una continuación de la serie de Super Mario y sigue al fontanero Mario en su búsqueda por salvar a la princesa Peach del malvado Bowser.',
      pegi_id: '3',
      category_id: '11',
      mode_id: '2',
      price: 45.0,
      stock: 206,
    },
    {
      game_id: '3',
      name: "Assassin's Creed Valhalla",
      distributor: 'Ubisoft',
      stars: 5,
      description:
        "Assassin's Creed Valhalla es un videojuego de acción y aventura desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el duodécimo título principal de la serie Assassin's Creed y el sucesor de Assassin's Creed Odyssey de 2018.",
      pegi_id: '4',
      category_id: '12',
      mode_id: '1',
      price: 60.0,
      stock: 150,
    },
    {
      game_id: '4',
      name: 'FIFA 22',
      distributor: 'EA Sports',
      stars: 4,
      description:
        'FIFA 22 es un videojuego de simulación de fútbol desarrollado por EA Sports y publicado por Electronic Arts. Es la vigésima novena entrega de la serie FIFA y fue lanzado en septiembre de 2021 para PlayStation 5, Xbox Series X/S, PlayStation 4, Xbox One, Microsoft Windows y Nintendo Switch.',
      pegi_id: '3',
      category_id: '13',
      mode_id: '2',
      price: 55.0,
      stock: 100,
    },
    {
      game_id: '5',
      name: 'The Legend of Zelda: Breath of the Wild',
      distributor: 'Nintendo',
      stars: 5,
      description:
        'The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura desarrollado y publicado por Nintendo. Es el décimo octavo título principal de la serie de The Legend of Zelda y fue lanzado en marzo de 2017 para Nintendo Switch y Wii U.',
      pegi_id: '3',
      category_id: '14',
      mode_id: '1',
      price: 50.0,
      stock: 80,
    },
    {
      game_id: '6',
      name: 'Horizon Zero Dawn',
      distributor: 'Sony Interactive Entertainment',
      stars: 4,
      description:
        'Horizon Zero Dawn es un videojuego de rol y acción desarrollado por Guerrilla Games y publicado por Sony Interactive Entertainment. Fue lanzado para PlayStation 4 en febrero de 2017 y para Microsoft Windows en agosto de 2020.',
      pegi_id: '4',
      category_id: '15',
      mode_id: '1',
      price: 39.99,
      stock: 120,
    },
    {
      game_id: '7',
      name: 'The Last of Us Part II',
      distributor: 'Sony Interactive Entertainment',
      stars: 5,
      description:
        'The Last of Us Part II es un videojuego de acción-aventura y supervivencia desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment. Es la secuela de The Last of Us de 2013 y sigue a Ellie en su búsqueda de venganza en un mundo post-apocalíptico lleno de peligros.',
      pegi_id: '4',
      category_id: '16',
      mode_id: '1',
      price: 50,
      stock: 100,
    },

    {
      game_id: '8',
      name: 'Cyberpunk 2077',
      distributor: 'CD Projekt',
      stars: 3,
      description:
        'Cyberpunk 2077 es un videojuego de rol de acción desarrollado y publicado por CD Projekt. Está ambientado en un futuro distópico en la ciudad de Night City, California, y sigue al personaje del jugador en su búsqueda de fama y fortuna en un mundo lleno de peligros y corrupción.',
      pegi_id: '4',
      category_id: '21',
      mode_id: '1',
      price: 60,
      stock: 80,
    },

    {
      game_id: '9',
      name: 'Super Smash Bros. Ultimate',
      distributor: 'Nintendo',
      stars: 4,
      description:
        'Super Smash Bros. Ultimate es un videojuego de lucha desarrollado por Bandai Namco Studios y Sora Ltd. y publicado por Nintendo. Es la quinta entrega de la serie Super Smash Bros. y presenta una lista de personajes jugables ampliada, así como modos de juego mejorados.',
      pegi_id: '3',
      category_id: '19',
      mode_id: '2',
      price: 50,
      stock: 150,
    },

    {
      game_id: '10',
      name: 'Death Stranding',
      distributor: 'Sony Interactive Entertainment',
      stars: 3,
      description:
        'Death Stranding es un videojuego de acción y aventura desarrollado por Kojima Productions y publicado por Sony Interactive Entertainment. El juego sigue al personaje principal, Sam Porter Bridges, en su tarea de conectar ciudades aisladas en un mundo post-apocalíptico lleno de peligros.',
      pegi_id: '4',
      category_id: '2',
      mode_id: '1',
      price: 45,
      stock: 100,
    },

    {
      game_id: '11',
      name: 'Animal Crossing: New Horizons',
      distributor: 'Nintendo',
      stars: 4,
      description:
        'Animal Crossing: New Horizons es un videojuego de simulación de vida desarrollado y publicado por Nintendo. Fue lanzado para Nintendo Switch en marzo de 2020 y permite al jugador construir y personalizar una isla habitada por animales antropomórficos.',
      pegi_id: '3',
      category_id: '1',
      mode_id: '1',
      price: 45,
      stock: 120,
    },
  ];

  pegis: PegiData[] = [
    {
      pegi_id: '1',
      name: 'PEGI 3',
    },
    {
      pegi_id: '2',
      name: 'PEGI 7',
    },
    {
      pegi_id: '3',
      name: 'PEGI 12',
    },
    {
      pegi_id: '4',
      name: 'PEGI 16',
    },
    {
      pegi_id: '5',
      name: 'PEGI 18',
    },
    {
      pegi_id: '6',
      name: 'PEGI OK',
    },
  ];

  genres: GenreData[] = [
    {
      category_id: '10',
      name: 'Arcade',
    },
    {
      category_id: '12',
      name: 'Aventura',
    },
    {
      category_id: '11',
      name: 'Acción',
    },
    {
      category_id: '13',
      name: 'Carreras',
    },
    {
      category_id: '14',
      name: 'Combate',
    },
    {
      category_id: '15',
      name: 'Deportes',
    },
    {
      category_id: '16',
      name: 'Estrategia',
    },
    {
      category_id: '17',
      name: 'Lógica',
    },
    {
      category_id: '18',
      name: 'Plataformas',
    },
    {
      category_id: '19',
      name: 'Rol',
    },
    {
      category_id: '20',
      name: 'Simulación',
    },
    {
      category_id: '21',
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

  gamePictures: GamePictureData[] = [
    {
      game_picture_id: '2',
      picture: '/assets/game.jpg',
      game_id: 'fa6ca618-2851-47d4-930f-0b510b40fed2',
    },
    {
      game_picture_id: '1',
      picture: '/assets/1.jpg',
      game_id: 'fa6ca618-2851-47d4-930f-0b510b40fed2',
    },
    {
      game_picture_id: '3',
      picture: '/assets/2.jpg',
      game_id: 'fa6ca618-2851-47d4-930f-0b510b40fed2',
    },
    {
      game_picture_id: '4',
      picture: '/assets/3.jpg',
      game_id: 'fa6ca618-2851-47d4-930f-0b510b40fed2',
    },
    {
      game_picture_id: '5',
      picture: '/assets/key-kong-2.png',
      game_id: '2',
    },
    {
      game_picture_id: '6',
      picture: '/assets/donkey-kong-1.png',
      game_id: '2',
    },
    {
      game_picture_id: '7',
      picture: '/assets/donkey-kong-3.png',
      game_id: '2',
    },
    {
      game_picture_id: '8',
      picture: '/assets/donkey-kong-4.png',
      game_id: '2',
    },
    {
      game_picture_id: '9',
      picture: '/assets/3.jpg',
      game_id: '3',
    },
    {
      game_picture_id: '10',
      picture: '/assets/game.jpg',
      game_id: '3',
    },
    {
      game_picture_id: '11',
      picture: '/assets/donkey-kong-4.png',
      game_id: '4',
    },
    {
      game_picture_id: '12',
      picture: '/assets/donkey-kong-1.png',
      game_id: '4',
    },
  ];

  addToKartForm: FormGroup;

  game_id: string = 'fa6ca618-2851-47d4-930f-0b510b40fed2';
  user_id: string = '7814dfa';
  selectedGamePictures: GamePictureData[] = [];
  shoppingCartItems: ShoppingCartItemData[] = [] as ShoppingCartItemData[];
  game: ProductData;

  ngOnInit(): void {
    this.selectGame(this.game_id);
    this.selectPictures(this.game_id);
    this.createForm();
  }

  createForm() {
    this.addToKartForm = this._fb.group({
      game_quantity: ['1', [Validators.required]],
    });
  }

  selectPictures(game_id: string) {
    for (let i = 0; i < this.gamePictures.length; i++) {
      if (this.gamePictures[i].game_id == game_id) {
        this.selectedGamePictures.push(this.gamePictures[i]);
      }
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

  selectGame(game_id: string) {
    let gameSelected = this.games.find((game) => game.game_id == game_id);
    if (!!gameSelected) this.game = gameSelected;
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
        if(this.checkShoppingCartHasSpace()){
          if (this.checkGameIsNotInTheShoppingCartAlready()) {
            let cantidad = this.addToKartForm.get('game_quantity')?.value;
            let shoppingCartItem: ShoppingCartItemData =
              {} as ShoppingCartItemData;
            shoppingCartItem.game_id = this.game_id;
            shoppingCartItem.user_id = this.user_id;
            shoppingCartItem.game_quantity = cantidad;
            console.log(shoppingCartItem);
  
            this.shoppingItems.addToShoppingCart(shoppingCartItem);
  
            this.addToKartForm.reset();
          } else {
            alert(
              'El juego ya está en tu carrito de compras, para modificarlo dirigete allí, eliminalo y vuelve! :)'
            );
          }
        }else {
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
    console.log("espacio: ", shoppingCartList.length)
    if (shoppingCartList.length > 4) {
      permitir = false;
    }
    return permitir;
  }

  checkGameIsNotInTheShoppingCartAlready(): boolean {
    let shoppingCartList: ShoppingCartItemData[] =
      this.shoppingItems.getShoppingCart();
    console.log('0:', shoppingCartList.length);
    if (shoppingCartList.length > 0) {
      console.log('entro en el primer if');
      let permitir: boolean = true;
      shoppingCartList.forEach((shoppingCartElement) => {
        console.log('1:', shoppingCartElement.game_id);
        console.log('2:', this.game_id);
        if (shoppingCartElement.game_id == this.game_id) {
          console.log('son iguales');
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

  /* carrusel */

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
