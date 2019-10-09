import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SellerLandingComponent } from './landing/seller-landing.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';


@NgModule({
  declarations: [SellerComponent, SellerLandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SellerRoutingModule,
    SharedModule
  ],
  providers:[UserService]
})
export class SellerModule { }
