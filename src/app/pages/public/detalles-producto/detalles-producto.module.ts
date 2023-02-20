import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesProductoMainComponent } from './components/detalles-producto-main/detalles-producto-main.component';

@NgModule({
  declarations: [
    DetallesProductoMainComponent
  ],
  exports: [
    DetallesProductoMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetallesProductoModule { }
