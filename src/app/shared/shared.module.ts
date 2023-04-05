import { RouterModule } from '@angular/router';
import { NotPermissionComponent } from './components/not-permission/not-permission.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OrdinationComponent } from './components/ordination/ordination.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FiltersComponent } from './components/filters/filters.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CardProductComponent,
    FooterComponent,
    FiltersComponent,
    OrdinationComponent,
    NotPermissionComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    HeaderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    RouterModule
  ],
  exports: [
    CardProductComponent,
    FooterComponent,
    FiltersComponent,
    OrdinationComponent,
    NotPermissionComponent
  ]
})
export class SharedModule { }
