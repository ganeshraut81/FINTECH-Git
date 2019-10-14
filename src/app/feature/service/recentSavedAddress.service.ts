import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class RecentSavedAddressService {
    url: string = 'http://localhost:4200/assets/recentSavedAddress.json';

    constructor(private http: HttpClient) { }

    getRecentSavedAddress() {
        return this.http.get(this.url);
    }
}