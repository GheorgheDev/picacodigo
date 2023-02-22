import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

//Modulos
import { AuthRoutingModule } from './auth/auth.routing';



const routes: Routes = [

  // path: '/auth' AuthRouting
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
