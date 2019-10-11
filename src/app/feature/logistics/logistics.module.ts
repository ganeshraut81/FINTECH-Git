import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { LogisticsComponent } from './logistics.component';
import { LogisticsLandingComponent } from './landing/logistics-landing.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../service/user.service';
import { CreateOrderComponent } from './create/create-order.component';
import { ServiceRequestComponent } from './create/service-request/service-request.component';
import { ServiceProviderComponent } from './create/service-provider/service-provider.component';
import { ProductDetailComponent } from './create/consignment/product-detail/product-detail.component';
import { ShippingDetailComponent } from './create/consignment/shipping-detail/shipping-detail.component';
import { PackingDetailComponent } from './create/consignment/packing-detail/packing-detail.component';
import { SavedPackingDetailComponent } from './create/consignment/packing-detail/saved-packing-detail.component';
import { SavedShippingDetailComponent } from './create/consignment/shipping-detail/saved-shipping-detail.component';
import { RecentShippingDetailComponent } from './create/consignment/shipping-detail/recent-shipping-detail.component';
import { ConsignmentReviewComponent } from './create/consignment-review/consignment-review.component';
import { ManageComponent } from './manage/manage.component';
import { ConsignmentComponent } from './create/consignment/consignment.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DestinationDetailComponent } from './create/consignment/destination-detail/destination-detail.component';


@NgModule({
  declarations: [
    LogisticsComponent, 
    LogisticsLandingComponent, 
    StepperComponent, 
    CreateOrderComponent,
    ServiceRequestComponent, 
    ServiceProviderComponent, 
    ProductDetailComponent, 
    ShippingDetailComponent, 
    PackingDetailComponent, 
    SavedPackingDetailComponent, 
    SavedShippingDetailComponent, 
    RecentShippingDetailComponent, 
    ConsignmentReviewComponent, 
    ManageComponent, 
    ConsignmentComponent, 
    HeaderComponent, 
    FooterComponent, 
    DestinationDetailComponent,
    
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[UserService]
})
export class LogisticsModule { }
