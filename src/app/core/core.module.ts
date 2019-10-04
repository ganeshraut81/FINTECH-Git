import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { AdminModule } from '../feature/admin/admin.module';
import { FinanceModule } from '../feature/finance/finance.module';
import { BuyerModule } from '../feature/buyer/buyer.module';
import { LogisticsModule } from '../feature/logistics/logistics.module';
import { SellerModule } from '../feature/seller/seller.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../shared/login/login.component';
import { LogisticsComponent } from '../feature/logistics/logistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [CoreComponent, LoginComponent, HeaderComponent, SearchComponent, TrendingComponent, NewArrivalsComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AdminModule,
    FinanceModule,
    BuyerModule,
    LogisticsModule,
    SellerModule,
    SlickCarouselModule
    // SharedModule
  ],
  exports:[CoreComponent, LoginComponent]
})
export class CoreModule { }
