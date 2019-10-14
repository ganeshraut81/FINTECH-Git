import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogisticsRoutingModule } from './logistics-routing.module';
import { LogisticsComponent } from './logistics.component';
import { LogisticsLandingComponent } from './landing/logistics-landing.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../service/user.service';
import { StepperComponent } from './create/stepper/stepper.component';
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
import { SavedDestinationDetailComponent } from './create/consignment/destination-detail/saved-destination-detail.component';
import { RecentDestinationDetailComponent } from './create/consignment/destination-detail/recent-destination-detail.component';

@NgModule({
  declarations: [
    LogisticsComponent,
    LogisticsLandingComponent,
    StepperComponent,
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
    SavedDestinationDetailComponent,
    RecentDestinationDetailComponent
  ],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService]
})
export class LogisticsModule { }
