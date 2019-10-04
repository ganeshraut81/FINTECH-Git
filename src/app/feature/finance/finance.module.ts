import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FinanceLandingComponent } from './landing/finance-landing.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FinanceComponent, FinanceLandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceRoutingModule,
    // SharedModule
  ]
})
export class FinanceModule { }
