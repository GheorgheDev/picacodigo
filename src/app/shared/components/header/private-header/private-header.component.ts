import { MailBoxData } from 'src/app/private/components/notificaciones/model/mailbox-data';
import { ShoppingCartService } from './../../../../private/services/shopping-cart.service';
import { ShoppingCartItemData } from './../../../../public/model/shopping-cart-item-data';
import { Component, OnInit, HostListener } from '@angular/core';
import { UserData } from 'src/app/shared/models/user-data';
import { Router } from '@angular/router';
import { SharedServicesService } from 'src/app/shared/services/shared-services.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss'],
})
export class PrivateHeaderComponent implements OnInit {
  profileButtonToggle: string = 'on';
  ScreenWidth: number;
  ShoppingCartItemsQuantity: number;

  user: UserData
  profilepicture: string =""

  user_id = "0" 
  user_idFromSS: string | null = sessionStorage.getItem('user_id');

  /* Mailbox, get all mails to userid*/

  mailboxMessages: MailBoxData[] = [];


  constructor(private shoppingItems: ShoppingCartService, public sharedServices: SharedServicesService, private router: Router) {}

  ngOnInit() {
    if(!!this.user_idFromSS){
      this.user_id = this.user_idFromSS
    }
    this.sharedServices.getAllMessagesByUserId(this.user_id)
      .subscribe(messages => {
        this.mailboxMessages = messages;
      })
      this.getUserDataFromDB()
    this.onWindowResize();
    this.getShoppingCartItemsQuantity()

  }

  getUserDataFromDB(){
    this.sharedServices.getUserById(this.user_id)
      .subscribe(userLoggued => {
        this.user = userLoggued;
        this.user.picture = '/assets/media/michi-default.jpg';
      })
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

  logOut(){
    sessionStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
