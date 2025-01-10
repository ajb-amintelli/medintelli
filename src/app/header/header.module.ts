import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';  // For mat-toolbar
import { MatIconModule } from '@angular/material/icon';  // For mat-icon and mat-icon-button
import { MatMenuModule } from '@angular/material/menu';  // For mat-menu and matMenuTriggerFor
import { MatBadgeModule } from '@angular/material/badge';  // For matBadge
import { HeaderComponent } from './header.component';  // Your header component
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],  // Declare your header component
  imports: [
    CommonModule,  // Common Angular module
    MatToolbarModule,  // Import mat-toolbar module
    MatIconModule,  // Import mat-icon module
    MatMenuModule,  // Import mat-menu module
    MatBadgeModule,  // Import matBadge module for notification count
    AppRoutingModule
  ],
  exports: [HeaderComponent],  // Export the header component so it can be used elsewhere
})
export class HeaderModule { }
