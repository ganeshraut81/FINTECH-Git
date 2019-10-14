import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AddressDetailsService {

    url: string = 'http://localhost:4200/assets/address.json';
    // statesUrl: string = 'http://localhost:4200/assets/states.json';
    // citiesUrl: string = 'http://localhost:4200/assets/cities.json';

    constructor(private http: HttpClient) { }

    address() {
        return this.http.get(this.url);
    }

    // getStates(){
    //     return this.http.get(this.statesUrl)
    // }
    // getCities(){
    //     return this.http.get(this.citiesUrl)
    // }
}