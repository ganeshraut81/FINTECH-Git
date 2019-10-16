import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SourceSavedAddressService {
    sourceSavedAddressUrl: string = 'sourceSavedAddress.json';
   
    constructor(private http: HttpClient) { }

    getSourceSavedAddress() {
        return this.http.get(environment.url + this.sourceSavedAddressUrl);
    }
}