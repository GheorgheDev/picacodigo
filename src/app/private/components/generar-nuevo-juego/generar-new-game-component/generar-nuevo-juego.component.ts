import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvalidGameFormComponent } from '../invalid-game-form/invalid-game-form.component';
import { ValidGameFormComponent } from '../valid-game-form/valid-game-form.component';

@Component({
  selector: 'app-generar-nuevo-juego',
  templateUrl: './generar-nuevo-juego.component.html',
  styleUrls: ['./generar-nuevo-juego.component.scss'],
})
export class GenerarNuevoJuegoComponent implements OnInit {
  constructor(private _fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {}

  //validacion
  AddGameForm: FormGroup = this._fb.group({
    game_name: ['', [Validators.required]],
    distribuidor: ['', [Validators.required]],
    stars: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    pegi: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    modo: ['', [Validators.required]],
    stock: ['', [Validators.required]],
    precio: ['', [Validators.required]],
  });

  newProductDataChange() {
    let valores = this.AddGameForm.value;
    console.log(valores);
  }

  sendMessageAddGame() {
    if (this.AddGameForm.invalid) {
      this.AddGameForm.markAllAsTouched();
      this.dialog.open(InvalidGameFormComponent);
    } else {
      this.dialog.open(ValidGameFormComponent);
    }
  }
}
