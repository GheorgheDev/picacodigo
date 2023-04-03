import { Injectable } from '@angular/core';
import { ShoppingCartItemData } from 'src/app/public/model/shopping-cart-item-data';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingItems: ShoppingCartItemData[] = [] as ShoppingCartItemData[];

  constructor() {
  }

  getShoppingCart(): ShoppingCartItemData[]{
    const SHOPPING_CART_S = sessionStorage.getItem('shoppingItems')
    return SHOPPING_CART_S ? JSON.parse(SHOPPING_CART_S) : []
  }


  addToShoppingCart(item: ShoppingCartItemData) {
    const SHOPPING_CART = this.getShoppingCart()
    SHOPPING_CART.push(item)
    sessionStorage.setItem('shoppingItems', JSON.stringify(SHOPPING_CART))
  }

  deleteItemFromShoppingCart(game_id:string){
    const SHOPPING_CART = this.getShoppingCart()
    let itemToDeleteFromShoppingCartIndex =  SHOPPING_CART.findIndex(item=> item.game_id == game_id)
    SHOPPING_CART.splice(itemToDeleteFromShoppingCartIndex,1)
    sessionStorage.setItem('shoppingItems', JSON.stringify(SHOPPING_CART))
  }
  

  
}
