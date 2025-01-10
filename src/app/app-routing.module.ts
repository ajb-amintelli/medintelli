import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FieldDetailComponent } from './field-detail/field-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'field/:id', component: FieldDetailComponent }, // Route for field details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
