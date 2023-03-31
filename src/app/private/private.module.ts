import { MyProfilePrivModule } from './components/my-profile-priv/my-profile-priv.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesModule } from './components/notificaciones/notificaciones.module';
import { GestionUsuariosModule } from './components/gestion-usuarios/gestion-usuarios.module';
import { UserProductsModule } from './components/user-products/user-products.module';
import { PrivateRoutingModule } from './private.routing';
import { GenerarNuevoJuegoModule } from './components/generar-nuevo-juego/generar-nuevo-juego.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    GestionUsuariosModule,
    MyProfilePrivModule,
    NotificacionesModule,
    UserProductsModule,
    GenerarNuevoJuegoModule
  ],
})
export class PrivateModule { }
