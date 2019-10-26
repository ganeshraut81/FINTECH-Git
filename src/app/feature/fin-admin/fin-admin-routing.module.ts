import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardComponent } from './dashbord/fin-admin.component';

const FinAdminRoutes: Routes = [
  { path: '', component: DashboardDetailsComponent },
  { path: 'fin-admin/details', component: DashboardDetailsComponent },
  { path: 'fin-admin/dashboard', component: DashboardComponent },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(FinAdminRoutes)],
  exports: [RouterModule]
})
export class FinAdminRoutingModule { }