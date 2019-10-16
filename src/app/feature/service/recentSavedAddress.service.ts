import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RecentSavedAddressService {
    recentSavedAddressUrl: string = 'recentSavedAddress.json';

    constructor(private http: HttpClient) { }

    getRecentSavedAddress() {
        return this.http.get(environment.url + this.recentSavedAddressUrl);
    }
}