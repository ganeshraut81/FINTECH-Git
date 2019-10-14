import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SourceSavedAddressService {
    url: string = 'http://localhost:4200/assets/sourceSavedAddress.json';

    constructor(private http: HttpClient) { }

    getSourceSavedAddress() {
        return this.http.get(this.url);
    }
}