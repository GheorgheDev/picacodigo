import { ShoppingCartPageComponent } from './shopping-cart/shopping-cart-page/shopping-cart-page.component';
import { UserProductsComponent } from './components/user-products/user-products.component';
import { NotificationPageComponent } from './components/notificaciones/components/notification-page/notification-page.component';
import { MyProfilePrivComponent } from './components/my-profile-priv/components/my-profile-priv/my-profile-priv.component';
import { UserManagementPageComponent } from './components/gestion-usuarios/components/user-management-page/user-management-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GenerarNuevoJuegoComponent } from './components/generar-nuevo-juego/components/generar-new-game-component/generar-nuevo-juego.component';



const routes: Routes = [
    { path: 'user-management', component: UserManagementPageComponent },
    { path: 'profile', component: MyProfilePrivComponent },
    { path: 'notification', component: NotificationPageComponent },
    { path: 'user-product', component: UserProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartPageComponent },
    { path: 'new-game', component: GenerarNuevoJuegoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
