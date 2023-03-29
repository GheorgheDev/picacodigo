import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementPageComponent } from './components/user-management-page/user-management-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { UserManagementTableComponent } from './components/user-management-table/user-management-table.component';


@NgModule({
  declarations: [
    UserManagementPageComponent,
    UserManagementTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
  ]
})
export class GestionUsuariosModule { }
