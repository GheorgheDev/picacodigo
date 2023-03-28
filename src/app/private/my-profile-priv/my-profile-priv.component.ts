import { DialogPasswordChangeComponent } from './components/dialog-password-change/dialog-password-change.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-profile-priv',
  templateUrl: './my-profile-priv.component.html',
  styleUrls: ['./my-profile-priv.component.scss'],
})

export class MyProfilePrivComponent implements OnInit {
  users = [
    {
      id: 1,
      Usuario: 'Manolo25',
      Nombre: 'Manolo Ortiz López',
      Email: 'michael.lawson@reqres.in',
      Telefono: '666-666-666',
      Fecha_de_nacimiento: '10/05/1998',
      Direccion_fisica: 'Calle de la piruleta nº 42',
      Imagen: '/assets/images/img_user.jpg',
    },
    {
      id: 2,
      Usuario: 'Maria30',
      Nombre: 'Maria Gutierrez Gómez',
      Email: 'Maria.lawson@reqres.in',
      Telefono: '666-666-666',
      Fecha_de_nacimiento: '10/05/1998',
      Direccion_fisica: 'Calle del zapato nº 15',
      Imagen: '../images/img_user.jpg',
    },
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  stateUser = true;

  openDialog() {
    this.dialog.open(DialogPasswordChangeComponent);
  }
}