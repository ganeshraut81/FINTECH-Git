import { Route } from '@angular/router';
import { CoreComponent } from './core.component';

export const coreRoutes: Route[] = [
    {
        path:'',
        component: CoreComponent,
        children: [
            { path: '', loadChildren: () => import('../core/core.module').then(m => m.CoreModule) },
            { path: 'admin', loadChildren: () => import('../feature/admin/admin.module').then(m => m.AdminModule) },
            { path: 'buyer', loadChildren: () => import('../feature/buyer/buyer.module').then(m => m.BuyerModule) },
            { path: 'finance', loadChildren: () => import('../feature/finance/finance.module').then(m => m.FinanceModule) },
            { path: 'logistics', loadChildren: () => import('../feature/logistics/logistics.module').then(m => m.LogisticsModule) },
            { path: 'seller', loadChildren: () => import('../feature/seller/seller.module').then(m => m.SellerModule) }
        ]
    }];