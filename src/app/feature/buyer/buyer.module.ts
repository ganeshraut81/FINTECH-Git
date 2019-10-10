import { BuyerLandingComponent } from './landing/buyer-landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { UserService } from '../service/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BuyerComponent, BuyerLandingComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // SharedModule
  ],
  providers:[UserService]
})
export class BuyerModule { }
