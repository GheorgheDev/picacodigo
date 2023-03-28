import { DetallesProductoMainComponent } from './detalles-producto-component/detalles-producto-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvalidAddtokartComponent } from './invalid-addtokart/invalid-addtokart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewsComponent } from './reviews/reviews.component';
import {MatCardModule} from '@angular/material/card';
import { ReviewCardComponent } from './review-card/review-card.component';
import { AddReviewComponent } from './add-review/add-review.component';


@NgModule({
    declarations: [
        DetallesProductoMainComponent,
        InvalidAddtokartComponent,
        ReviewsComponent,
        ReviewCardComponent,
        AddReviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        SharedModule,
        MatCardModule
    ],
    exports: [
        DetallesProductoMainComponent
    ]
})
export class DetallesProductoMainModule { }