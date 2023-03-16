import { CommonHeaderComponent } from './common-header/common-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HeaderContentComponent } from './header-content/header-content.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    CommonHeaderComponent,
    HeaderContentComponent,
    
  ],
  imports: [
    CommonModule, 
    MatToolbarModule, 
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule
  ],
  exports: [
    PrivateHeaderComponent,
    PublicHeaderComponent,
    CommonHeaderComponent,
  ],
})
export class HeaderModule {}
