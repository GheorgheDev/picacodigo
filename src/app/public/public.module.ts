import { DetallesProductoMainModule } from './components/detalles-producto-main/detalles-producto-main.module';
import { PublicRoutingModule } from './public.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DashboardModule,
    DetallesProductoMainModule
  ],
  exports: [
  ]
})
export class PublicModule { }