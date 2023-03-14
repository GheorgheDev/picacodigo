import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { UserProductsComponent } from './user-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserProductsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule
  ],
  exports: [
    UserProductsComponent
  ]
})
export class UserProductsModule { }
