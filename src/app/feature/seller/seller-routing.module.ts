import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SellerLandingComponent } from './landing/seller-landing.component';

const SellerRoutes: Routes = [ { path: '', component: SellerComponent },
{ path: 'sellerHomePage', component: SellerLandingComponent },];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(SellerRoutes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
