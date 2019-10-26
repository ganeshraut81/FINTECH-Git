import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinAdminRoutingModule } from './fin-admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardComponent } from './dashbord/fin-admin.component';



@NgModule({
  declarations: [DashboardDetailsComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    FinAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FinAdminModule { }
