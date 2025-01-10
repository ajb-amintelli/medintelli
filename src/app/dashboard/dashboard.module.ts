import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list'; // For mat-grid-list
import { MatFormFieldModule } from '@angular/material/form-field'; // For mat-form-field
import { MatSelectModule } from '@angular/material/select'; // For mat-select
import { MatOptionModule } from '@angular/material/core'; // For mat-option
import { MatCardModule } from '@angular/material/card'; // For mat-card
import { MatIconModule } from '@angular/material/icon'; // For mat-icon
import { MatMenuModule } from '@angular/material/menu'; // For mat-menu

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
