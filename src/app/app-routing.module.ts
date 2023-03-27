import { UserProductsComponent } from './private/components/user-products/user-products.component';
import { UserManagementPageComponent } from './private/gestion-usuarios/componentes/user-management-page/user-management-page.component';
import { NotificationPageComponent } from './private/notificaciones/components/notification-page/notification-page.component';
import { DetallesProductoMainComponent } from './public/components/detalles-producto-main/detalles-producto-main.component';
import { DashboardComponent } from './public/components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';


//Modulos
import { AuthRoutingModule } from './auth/auth.routing';
import { LoginComponent } from './auth/login/login.component';
import { PrivateRoutingModule } from './private/private.routing';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'notification', component: NotificationPageComponent },
  { path: 'user-management', component: UserManagementPageComponent },
  { path: 'product-detail', component: DetallesProductoMainComponent },
  { path: 'user-product', component: UserProductsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PrivateRoutingModule 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }