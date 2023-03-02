import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CambioPasswordComponent } from './components/cambio-password/cambio-password.component';



const routes: Routes = [
    { path: 'cambio-password', component: CambioPasswordComponent},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule {}
