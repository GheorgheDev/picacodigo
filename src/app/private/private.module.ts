import { HeaderModule } from './../shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MyProfilePrivComponent } from './components/my-profile-priv/my-profile-priv.component';
import { MatCardModule } from '@angular/material/card';
import { CambioPasswordComponent } from './components/cambio-password/cambio-password.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionUsuariosModule } from './gestion-usuarios/gestion-usuarios.module';
import { UserProductsModule } from './components/user-products/user-products.module';
import { GenerarNuevoJuegoModule } from './generar-nuevo-juego/generar-nuevo-juego.module';

@NgModule({
  declarations: [MyProfilePrivComponent, CambioPasswordComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    HeaderModule,
    NotificacionesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GestionUsuariosModule,
    UserProductsModule,
    GenerarNuevoJuegoModule
  ],
  exports: [MyProfilePrivComponent],
})
export class PrivateModule {}
