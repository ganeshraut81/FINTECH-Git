import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BuyerModule } from './feature/buyer/buyer.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AdminModule } from './feature/admin/admin.module';
import { FinanceModule } from './feature/finance/finance.module';
import { LogisticsModule } from './feature/logistics/logistics.module';
import { SellerModule } from './feature/seller/seller.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //  CoreModule,
    AdminModule,
    FinanceModule,
    BuyerModule,
    LogisticsModule,
    SellerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
