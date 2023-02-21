import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesProductoRoutingModule } from './detalles-producto-routing.module';

import { DetallesProductoMainComponent } from './pages/detalles-producto-main/detalles-producto-main.component';

@NgModule({
  declarations: [
    DetallesProductoMainComponent
  ],
  exports: [
    DetallesProductoMainComponent
  ],
  imports: [
    CommonModule,
    DetallesProductoRoutingModule
  ]
})
export class DetallesProductoModule { }
