import { ShoppingCartService } from './../../../../private/services/shopping-cart.service';
import { ShoppingCartItemData } from './../../../../public/model/shopping-cart-item-data';
import { Component, OnInit, HostListener } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  profileButtonToggle: string = 'on';
  ScreenWidth: number;
  ShoppingCartItemsQuantity: number;

  user: UserData[] = [
    {
      user_id: "1",
      user_username: 'AndreaC',
      name: 'Andrea Cebrian',
      img: 'assets/media/example-photo.jpg',
    },
  ];

  constructor(private shoppingItems: ShoppingCartService) {}

  ngOnInit() {
    this.onWindowResize();
    this.getShoppingCartItemsQuantity()
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ScreenWidth = window.innerWidth;
    if (this.ScreenWidth < 769) {
      this.profileButtonToggle = 'off';
    } else {
      this.profileButtonToggle = 'on';
    }
  }

  getShoppingCartItemsQuantity() {
    let shoppingCartList: ShoppingCartItemData[] = this.shoppingItems.getShoppingCart();
    this.ShoppingCartItemsQuantity = shoppingCartList.length
  }
}
