import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DetallesProductoMainComponent } from './detalles-producto-component/detalles-producto-main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidAddtokartComponent } from './invalid-addtokart/invalid-addtokart.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderModule } from "../../../shared/components/header/header.module";
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    declarations: [
        DetallesProductoMainComponent,
        InvalidAddtokartComponent,
        ReviewsComponent,
        ReviewCardComponent,
        AddReviewComponent,
        EditGameComponent
    ],
    exports: [
        DetallesProductoMainComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        SharedModule,
        HeaderModule,
        MatDialogModule,
        MatCardModule,
        MatSnackBarModule
    ]
})
export class DetallesProductoMainModule { }