import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AddressDetailsService {

    addressUrl: string = 'address.json';
    // statesUrl: string = 'http://localhost:4200/assets/states.json';
    // citiesUrl: string = 'http://localhost:4200/assets/cities.json';

    constructor(private http: HttpClient) { }

    address() {
        return this.http.get(environment.url + this.addressUrl);
    }

    // getStates(){
    //     return this.http.get(this.statesUrl)
    // }
    // getCities(){
    //     return this.http.get(this.citiesUrl)
    // }
}