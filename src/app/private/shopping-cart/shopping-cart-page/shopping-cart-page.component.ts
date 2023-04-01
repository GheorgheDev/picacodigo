import { ShoppingCartPageData } from './../../models/shopping-cart-page-data';
import { ProductData } from './../../../public/model/game-data';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCartItemData } from 'src/app/public/model/shopping-cart-item-data';
import * as moment from 'moment'
import { NewSaleData} from '../../models/sale-data';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {

  /* games: ProductData[] = [
    {
      game_id: '1',
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
  ]; */

  userType='1'
  user_id = '1'

  shoppingCardItems: ShoppingCartItemData[]
  
  completeShoppingCartItems: ShoppingCartPageData[] = [] as ShoppingCartPageData[]
  gameFromShoppingItem: ProductData
  totalAllShoppigCartItems: number = 0

  allGames: ProductData[] = [] as ProductData[]
  games: ProductData[] = [] as ProductData[]
  
  

  totalPrice: number

  sales: NewSaleData[] = [] as NewSaleData[]

  constructor(private shoppingItems: ShoppingCartService ) { }

  ngOnInit(): void {
    this.getAllGames()
    
  }

  getAllGames() {
    this.shoppingItems.getAllGames().subscribe({
      next: games => {
        this.allGames = games
        /* console.log(this.allGames) */
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.games = this.allGames
        this.getShoppingCartFromSS()
      }
    });
  }

  getShoppingCartFromSS(){
    let shoppingCart: ShoppingCartItemData[] = this.shoppingItems.getShoppingCart();
    this.shoppingCardItems = shoppingCart
    this.completeShoppingCartData()
  }

  completeShoppingCartData(){
    this.shoppingCardItems.forEach(shoppingCardItem => {
      let completeShoppingCart: ShoppingCartPageData = {} as ShoppingCartPageData
      this.gameFromShoppingItem = {} as ProductData
      this.findGameFromShoppingItem(shoppingCardItem.game_id)
      completeShoppingCart.game_id= this.gameFromShoppingItem.game_id
      completeShoppingCart.game_name= this.gameFromShoppingItem.name
      completeShoppingCart.game_price= this.gameFromShoppingItem.price
      completeShoppingCart.game_quantity= shoppingCardItem.game_quantity
      completeShoppingCart.game_total_price= Number((shoppingCardItem.game_quantity*this.gameFromShoppingItem.price).toFixed(2))
      this.completeShoppingCartItems.push(completeShoppingCart)
      this.calculateTotalPrice()
    });
  }

  findGameFromShoppingItem(game_id: string) {
    const ProductData = this.games.find((game) => game.game_id == game_id);
    if (!!ProductData) {
      this.gameFromShoppingItem = ProductData;
    }
  }

  calculateTotalPrice(){
    let totalAllShoppigCart:number = 0
    this.completeShoppingCartItems.forEach(completeShoppingCartItem => {
      totalAllShoppigCart += completeShoppingCartItem.game_total_price
    });
    this.totalAllShoppigCartItems = Number(totalAllShoppigCart.toFixed(2))
  }


  deleteItemFromShoppingCartSS(game_id:string){ 
     let itemToDeleteFromShoppingCartIndex =  this.completeShoppingCartItems.findIndex(item=> item.game_id == game_id)
     this.completeShoppingCartItems.splice(itemToDeleteFromShoppingCartIndex,1)
     this.shoppingItems.deleteItemFromShoppingCart(game_id);
     this.calculateTotalPrice()
  }

  buy(){
    this.completeShoppingCartItems.forEach(completeShoppingCartItem => {
      let sale: NewSaleData = {} as NewSaleData
      let todayDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      sale.game_id= completeShoppingCartItem.game_id
      sale.amount = completeShoppingCartItem.game_quantity
      sale.user_id = this.user_id
      sale.date = new Date(todayDate)
      this.sales.push(sale)
    })
    console.log(this.sales)
  }

  


}
