import { MailBoxData } from 'src/app/private/components/notificaciones/model/mailbox-data';
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
      username: 'AndreaC',
      fullname: 'Andrea Cebrian',
      picture: 'assets/media/example-photo.jpg',
    },
  ];

  /* Mailbox, get all mails to userid*/

  mailboxMessages: MailBoxData[] = [
    {
      message_id: '1',
      user_from_id: '1',
      user_to_id: '4',
      content: 'Hola Gheorghe soy Andrea',
      date: new Date('2023-03-04'),
      read: false,
    },
    {
      message_id: '1',
      user_from_id: '2',
      user_to_id: '4',
      content: 'Hola Gheorghe soy Juanjo',
      date: new Date('2023-03-05'),
      read: false,
    },
    {
      message_id: '3',
      user_from_id: '1',
      user_to_id: '4',
      content: 'Hola Gheorghe soy Andrea de nuevo',
      date: new Date('2023-03-05'),
      read: false,
    },
    {
      message_id: '4',
      user_from_id: '3',
      user_to_id: '4',
      content: 'Hola soy Salva',
      date: new Date('2023-03-05'),
      read: false,
    },
    {
      message_id: '5',
      user_from_id: '3',
      user_to_id: '4',
      content: 'Hola soy Salva otra vez',
      date: new Date('2023-03-06'),
      read: false,
    },
    {
      message_id: '6',
      user_from_id: '5',
      user_to_id: '4',
      content: 'Hola soy barbara',
      date: new Date('2023-03-07'),
      read: false,
    },
    {
      message_id: '7',
      user_from_id: '5',
      user_to_id: '4',
      content: 'Hola como estas, soy barbara de nuevo',
      date: new Date('2023-03-07'),
      read: false,
    },
    {
      message_id: '8',
      user_from_id: '2',
      user_to_id: '4',
      content: 'Hola soy juanjo otra vez',
      date: new Date('2023-03-09'),
      read: false,
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
