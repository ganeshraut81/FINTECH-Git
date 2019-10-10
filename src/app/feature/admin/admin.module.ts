import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

// import { AdminLandingComponent } from './landing/admin-landing.component';
// import { LoginComponent } from '../../shared/login/login.component';
// import { SharedModule } from '../../shared/shared.module';
// import { RouterModule } from '@angular/router';
// import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [ 
    // RouterModule.forChild(AdminRout)
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // SharedModule
  ]
})
export class AdminModule { }
