import { MyProfilePrivModule } from './../my-profile-priv/my-profile-priv.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from './../shared/components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CambioPasswordComponent } from './components/cambio-password/cambio-password.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionUsuariosModule } from './gestion-usuarios/gestion-usuarios.module';
import { UserProductsModule } from './components/user-products/user-products.module';

@NgModule({
  declarations: [CambioPasswordComponent],
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
    SharedModule,
    MyProfilePrivModule
  ]
})
export class PrivateModule {}
