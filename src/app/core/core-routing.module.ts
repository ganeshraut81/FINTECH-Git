import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ProductListComponent } from './product-list/product-list.component';

const coreRoutes: Routes = [
    {
        path: '',
        component: CoreComponent,
    },
    {
        path: 'productList',
        component: ProductListComponent,
    }];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(coreRoutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }