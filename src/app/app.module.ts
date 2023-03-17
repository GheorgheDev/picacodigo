import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
    SharedModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
