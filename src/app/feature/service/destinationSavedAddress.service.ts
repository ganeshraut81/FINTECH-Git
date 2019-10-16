import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DestinationSavedAddressService {
    destinationSavedAddressUrl: string = 'destinationSavedAddress.json';

    constructor(private http: HttpClient) { }

    getDestinationSavedAddress() {
        return this.http.get(environment.url + this.destinationSavedAddressUrl);
    }
}