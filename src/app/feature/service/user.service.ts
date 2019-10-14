import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url: string = environment.url;

    constructor(private http: HttpClient) { }

    Login(userObject: any) {
        return this.http.get(this.url, { responseType: "text" });
    }
}
