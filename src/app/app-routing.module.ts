import { FinanceComponent } from './feature/finance/finance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { ErrorComponent } from './shared/error/error.component';
// import { AdminComponent } from './feature/admin/admin.component';
import { AdminModule } from './feature/admin/admin.module';
import { BuyerModule } from './feature/buyer/buyer.module';

const routes: Routes = [
  // { path: '', component: CoreComponent },
  { path: '', loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule) },
  {
    path: 'admin', loadChildren: () => import('../app/feature/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'buyer', loadChildren: () => import('../app/feature/buyer/buyer.module').then(m => m.BuyerModule)
  },
  {
    path: 'finance', loadChildren: () => import('../app/feature/finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: 'logistics', loadChildren: () => import('./feature/logistics/logistics.module').then(m => m.LogisticsModule)
  },
  {
    path: 'seller', loadChildren: () => import('../app/feature/seller/seller.module').then(m => m.SellerModule)
  },
  // { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
