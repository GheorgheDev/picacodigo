import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarNuevoJuegoComponent } from './generar-new-game-component/generar-nuevo-juego.component';
import { InvalidGameFormComponent } from './invalid-game-form/invalid-game-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidGameFormComponent } from './valid-game-form/valid-game-form.component';

@NgModule({
  declarations: [
    GenerarNuevoJuegoComponent,
    InvalidGameFormComponent,
    ValidGameFormComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class GenerarNuevoJuegoModule {}
