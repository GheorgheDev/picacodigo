import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingCartCardComponent } from './shopping-cart-card/shopping-cart-card.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ShoppingCartPageComponent,
    ShoppingCartCardComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class ShoppingCartModule { }
