import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class serviceProvidersService {

    serviceProvidersURL:string = "serviceProviders.json";
    header: any;

    constructor(private http: HttpClient) { }

    getConsignmentReview() {
        console.log(`URL: ${environment.url + this.serviceProvidersURL}`);
        
        return this.http.get(environment.url + this.serviceProvidersURL);
        // return this.http.get(this.url);
    }
}
