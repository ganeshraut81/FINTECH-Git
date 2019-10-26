import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FinanceLandingComponent } from './landing/finance-landing.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LoginComponent } from './login/login.component';
import { StepperComponent } from './journey/stepper/stepper.component';
import { DocumentsComponent } from './documents/documents.component';
import { StatusComponent } from './status/status.component';
import { FinanceOptionComponent } from './journey/finance-option/finance-option.component';
import { FinanceDocumentsComponent } from './journey/finance-documents/finance-documents.component';
import { FinanceServiceProviderComponent } from './journey/finance-service-provider/finance-service-provider.component';
import { FinanceViewStatusComponent } from './journey/finance-view-status/finance-view-status.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BreadcrumbsComponent } from './journey/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    FinanceComponent,
     FinanceLandingComponent, 
     HeaderComponent, 
     FooterComponent, 
     LeftMenuComponent, 
     LoginComponent, 
     StepperComponent, 
     DocumentsComponent, 
     StatusComponent, 
     FinanceOptionComponent, 
     FinanceDocumentsComponent, 
     FinanceServiceProviderComponent, 
     FinanceViewStatusComponent, BreadcrumbsComponent
  
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceRoutingModule,
    SharedModule,
    Ng5SliderModule
  ],
  providers:[UserService],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FinanceModule { }
