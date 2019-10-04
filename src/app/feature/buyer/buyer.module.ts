import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { BuyerLandingComponent } from './landing/buyer-landing.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from '../../shared/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BuyerComponent, BuyerLandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BuyerRoutingModule,
    // SharedModule
  ]
})
export class BuyerModule { }
