import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogisticsComponent } from './logistics.component';
import { ManageComponent } from './manage/manage.component';
import { ServiceProviderComponent } from './create/service-provider/service-provider.component';
import { ServiceRequestComponent } from './create/service-request/service-request.component';
import { ConsignmentReviewComponent } from './create/consignment-review/consignment-review.component';
import { ConsignmentComponent } from './create/consignment/consignment.component';
import { LogisticsLandingComponent } from './landing/logistics-landing.component';
import { CreateOrderComponent } from './create/create-order.component';


const logisticsRoutes: Routes = [
  // { path: '', component: LogisticsComponent },
  {
    path: '', component: LogisticsComponent,
    children: [
      { path: '', component: LogisticsLandingComponent },
      { path: 'create-order', component: CreateOrderComponent },
      { path: 'request', component: ServiceRequestComponent },
      { path: 'details', component: ConsignmentComponent },
      { path: 'provider', component: ServiceProviderComponent },
      { path: 'review', component: ConsignmentReviewComponent },
      { path: 'manage', component: ManageComponent },
    ]
  },
  // { path: 'manage', component: ManageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(logisticsRoutes)],
  exports: [RouterModule]
})
export class LogisticsRoutingModule { }
