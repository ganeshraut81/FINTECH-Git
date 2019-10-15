import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DestinationRecentAddressService {
    destinationRecentAddressUrl: string = 'destinationRecentAddress.json';

    constructor(private http: HttpClient) { }

    getDestinationRecentAddress() {
        return this.http.get(environment.url + this.destinationRecentAddressUrl);
    }
}