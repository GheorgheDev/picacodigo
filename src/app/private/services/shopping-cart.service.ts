import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCartItemData } from 'src/app/public/model/shopping-cart-item-data';
import { Observable } from 'rxjs';
import { ProductData } from 'src/app/public/model/game-data';
import { NewSaleData } from '../models/sale-data';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingItems: ShoppingCartItemData[] = [] as ShoppingCartItemData[];

  constructor(private http:HttpClient) {
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


  getAllGames(): Observable<ProductData[]> {
    return this.http.get<ProductData[]>('/api/games/all')
  }

  addNewSale(sale:NewSaleData): Observable<NewSaleData>{
    return this.http.post<NewSaleData>('/api/sales/add', sale )
  }
  
  /* addNewSale(saleDate: string, saleAmount: number, saleGameId: string, saleUserId: string){
  return this.http.post<NewSaleData>('/api/sales/add', {'date': saleDate, 'amount': saleAmount, 'game_id': saleGameId, 'user_id':saleUserId } )
  } */

  
}
