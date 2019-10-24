import { FinanceLandingComponent } from './landing/finance-landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance.component';
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


const FinanceRoutes: Routes = [{
  path: '', component: FinanceComponent
  , children: [
    { path: '', component: FinanceLandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'finance/financeOption', component: StepperComponent, data: {
      breadcrumb: 'View Products'
    }},
    { path: 'finance/financeDocuments', component: FinanceDocumentsComponent, data: {
      breadcrumb: 'Details and Documents'
    }},
    { path: 'finance/financeServiceProvider', component: FinanceServiceProviderComponent, data: {
      breadcrumb: 'Select Financier'
    }},
    { path: 'finance/financeViewStatus', component: FinanceViewStatusComponent,data: {
      breadcrumb: 'View Status'
    }},
    { path: 'finance/documents', component: DocumentsComponent },
    { path: 'finance/status', component: StatusComponent },
  ]
},
]

@NgModule({
  imports: [RouterModule.forChild(FinanceRoutes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
