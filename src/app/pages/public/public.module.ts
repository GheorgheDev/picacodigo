import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card.product/card.product.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicSharedModule } from 'src/app/shared/public-shared/public-shared.module';



@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    PublicSharedModule
  ],
  exports: [
    CardProductComponent,
    DashboardComponent
  ]
  
})
export class PublicModule { }
