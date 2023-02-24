import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detalles-producto-main',
  templateUrl: './detalles-producto-main.component.html',
  styleUrls: ['./detalles-producto-main.component.scss']
})
export class DetallesProductoMainComponent {
  

  mostrarCarrusel() {
    console.log('Hecho');
  }
}
