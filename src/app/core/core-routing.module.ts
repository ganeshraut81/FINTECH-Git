import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { AdminComponent } from '../feature/admin/admin.component';
import { BuyerComponent } from '../feature/buyer/buyer.component';
import { FinanceComponent } from '../feature/finance/finance.component';
import { ErrorComponent } from '../shared/error/error.component';
const coreRoutes: Routes = [
    {
        path: '/',
        component: CoreComponent, 
        pathMatch: 'full'
    },
    {
        path: 'admin', loadChildren: () => import('../feature/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'buyer', loadChildren: () => import('../feature/buyer/buyer.module').then(m => m.BuyerModule)
    },
    {
        path: 'finance', loadChildren: () => import('../feature/finance/finance.module').then(m => m.FinanceModule)
    },
    {
        path: 'logistics', loadChildren: () => import('../feature/logistics/logistics.module').then(m => m.LogisticsModule)
    },
    {
        path: 'seller', loadChildren: () => import('../feature/seller/seller.module').then(m => m.SellerModule)
    },
    {
        // path: '**', component: ErrorComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }