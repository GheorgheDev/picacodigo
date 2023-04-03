import { ShoppingCartPageData } from './../../models/shopping-cart-page-data';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.scss']
})
export class ShoppingCartCardComponent implements OnInit {

  

  @Output() deleteItemFromShoppingCartSSEvent = new EventEmitter<string>();
  deleteItemShoppingCartSS(game_id:string){
    this.deleteItemFromShoppingCartSSEvent.emit(game_id);
  }

  

  @Input() completeShoppingCartItems: ShoppingCartPageData;

  constructor() { }

  ngOnInit(): void {
  }

}
