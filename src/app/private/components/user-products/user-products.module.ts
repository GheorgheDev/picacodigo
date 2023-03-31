import { RouterModule } from '@angular/router';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { UserProductsComponent } from './user-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    UserProductsComponent,
    CardSliderComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule,
    MatCardModule,
    RouterModule
  ],
  exports: [
    UserProductsComponent,
    CardSliderComponent
  ]
})
export class UserProductsModule { }
