import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticsRoutingModule } from './logistics-routing.module';
import { LogisticsComponent } from './logistics.component';
import { LogisticsLandingComponent } from './landing/logistics-landing.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LogisticsComponent, LogisticsLandingComponent],
  imports: [
    CommonModule,
    LogisticsRoutingModule,
    SharedModule
  ]
})
export class LogisticsModule { }
