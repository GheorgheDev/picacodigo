import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile-publ',

  templateUrl: './my-profile-publ.component.html',
  styleUrls: ['./my-profile-publ.component.scss'],
})
export class MyProfilePublComponent implements OnInit {
  users = [
    {
      id: 1,
      Usuario: 'Manolo25',
      Nombre: 'Manolo Ortiz López',
      Email: 'michael.lawson@reqres.in',
      Telefono: '666-666-666',
      Fecha_de_nacimiento: '10/05/1998',
      Direccion_fisica: 'Calle de la piruleta nº 42',
      Direccion_fiscal: 'Papelillos S.A',
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
      Direccion_fiscal: 'Cafelillos S.A',
      Imagen: '../images/img_user.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
