import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class orderHistoryService {

   // orderHistoryUrl:string = "orderHistory.json";
   orderHistoryUrl:string="orderHistory.json"
    header: any;

    constructor(private http: HttpClient) { }

    getOrderHistory() {
        // console.log(`URL: ${environment.url + this.orderHistoryUrl}`);
        
        //return this.http.get(environment.url + this.orderHistoryUrl);
         return this.http.get(environment.url + this.orderHistoryUrl);
    }
}
