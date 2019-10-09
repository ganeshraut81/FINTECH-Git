import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    trendingUrl: string = 'http://localhost:4200/assets/trendingProducts.json';
    newArrivalUrl: string = 'http://localhost:4200/assets/newArrivalProducts.json'

    constructor(private http: HttpClient) { }

    trendingProducts() {
        return this.http.get(this.trendingUrl);
    }

    newArrivalProducts() {
        return this.http.get(this.newArrivalUrl);
    }

}