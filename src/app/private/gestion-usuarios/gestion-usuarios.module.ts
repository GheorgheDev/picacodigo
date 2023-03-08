import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { UserManagementPageComponent } from './componentes/user-management-page/user-management-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    UserManagementPageComponent
  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class GestionUsuariosModule { }
