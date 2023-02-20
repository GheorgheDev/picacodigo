import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './pages/private/private.module';
import { PublicModule } from './pages/public/public.module';
import { PrivateSharedModule } from './shared/private-shared/private-shared.module';
import { PublicSharedModule } from './shared/public-shared/public-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './pages/public/components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    PrivateSharedModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
