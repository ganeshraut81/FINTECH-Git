import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance.component';


const FinanceRoutes: Routes = [ { path: '', component: FinanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(FinanceRoutes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
