import { DetallesProductoMainComponent } from './detalles-producto-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvalidAddtokartComponent } from './invalid-addtokart/invalid-addtokart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        DetallesProductoMainComponent,
        InvalidAddtokartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        SharedModule
    ],
    exports: [
        DetallesProductoMainComponent
    ]
})
export class DetallesProductoMainModule { }