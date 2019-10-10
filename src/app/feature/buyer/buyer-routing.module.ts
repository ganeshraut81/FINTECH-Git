import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { BuyerLandingComponent } from './landing/buyer-landing.component';


const BuyerRoutes: Routes = [
  { path: '', component: BuyerComponent },
  { path: 'buyerHomePage', component: BuyerLandingComponent },
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(BuyerRoutes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
