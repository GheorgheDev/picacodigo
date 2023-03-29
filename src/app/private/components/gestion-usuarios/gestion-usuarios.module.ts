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
import { HeaderModule } from "../../../shared/components/header/header.module";
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
        HeaderModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class GestionUsuariosModule { }
