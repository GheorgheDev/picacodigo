import { HeaderModule } from './../shared/components/header/header.module';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from './../shared/shared.module';
import { PublicRoutingModule } from './public.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfilePublComponent } from './components/my-profile-publ/my-profile-publ.component';
import { DashboardModule } from './components/dashboard/dashboard.module';

@NgModule({
  declarations: [
    MyProfilePublComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MatMenuModule,
    HeaderModule,
    DashboardModule
  ],
  exports: [
    MyProfilePublComponent,
  ]
})
export class PublicModule { }