import { HeaderModule } from './../shared/components/header/header.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from './../shared/shared.module';
import { PublicRoutingModule } from './public.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfilePublComponent } from './components/my-profile-publ/my-profile-publ.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfilePublComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    MatCardModule,
    MatMenuModule,
    HeaderModule
  ],
  exports: [
    DashboardComponent,
    MyProfilePublComponent,
  ]
})
export class PublicModule { }