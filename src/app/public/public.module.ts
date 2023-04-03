import { DetallesProductoMainModule } from './components/detalles-producto-main/detalles-producto-main.module';
import { PublicRoutingModule } from './public.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NeedLoginComponent } from './components/need-login/need-login.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
  
    NeedLoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DashboardModule,
    DetallesProductoMainModule,
    MatDialogModule
  ],
  exports: [
  ]
})
export class PublicModule { }