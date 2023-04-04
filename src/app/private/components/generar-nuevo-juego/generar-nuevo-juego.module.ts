import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarNuevoJuegoComponent } from './components/generar-new-game-component/generar-nuevo-juego.component';
import { InvalidGameFormComponent } from './components/invalid-game-form/invalid-game-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidGameFormComponent } from './components/valid-game-form/valid-game-form.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




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
    HeaderModule,
    SharedModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
})
export class GenerarNuevoJuegoModule {}
