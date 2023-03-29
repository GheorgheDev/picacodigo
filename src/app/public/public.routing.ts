import { DetallesProductoMainComponent } from './components/detalles-producto-main/detalles-producto-main.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'product-detail', component: DetallesProductoMainComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }