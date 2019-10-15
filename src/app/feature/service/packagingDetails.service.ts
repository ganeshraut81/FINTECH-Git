import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PackagingDetailsService {

    packagingDetailsUrl: string = 'packagingDetails.json';

    constructor(private http: HttpClient) { }

    getPackagingDetails() {
        return this.http.get(environment.url + this.packagingDetailsUrl);
    }
}