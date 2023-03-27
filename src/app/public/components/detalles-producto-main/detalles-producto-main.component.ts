import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-detalles-producto-main',
  templateUrl: './detalles-producto-main.component.html',
  styleUrls: ['./detalles-producto-main.component.scss']
})
export class DetallesProductoMainComponent {
  @ViewChild('fondoGris') fondoGris: ElementRef;
  @ViewChild('carrusel') carrusel: ElementRef;

  slides: string[] = ['./assets/game.jpg', './assets/1.jpg', './assets/2.jpg', './assets/3.jpg']
  i = 0;

  obtenerImagen(): string {
    return this.slides[this.i];
  }

  cambiarImagenAnterior(): void {
    this.i === 0 ? this.i = this.slides.length - 1 : this.i--;
  }

  cambiarImagenSiguiente(): void {
    this.i < this.slides.length - 1 ? this.i++ : this.i = 0;
  }

  mostrarCarrusel(imagenSeleccionada: number): void {
    this.i = imagenSeleccionada;
    (this.fondoGris.nativeElement as HTMLElement).classList.toggle('show');
    (this.carrusel.nativeElement as HTMLElement).classList.toggle('show');
  }

  cerrarCarrusel(): void {
    (this.fondoGris.nativeElement as HTMLElement).classList.toggle('show');
    (this.carrusel.nativeElement as HTMLElement).classList.toggle('show');
  }
}
