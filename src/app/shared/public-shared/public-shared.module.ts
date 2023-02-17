import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './components/card-product/card-product.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ 
    CardProductComponent,
   ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CardProductComponent
  ]
})
export class PublicSharedModule { }
