import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicSharedModule } from 'src/app/shared/public-shared/public-shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PublicSharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class PublicModule { }
