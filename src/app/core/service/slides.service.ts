import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SlidesService {

    url: string = 'http://localhost:4200/assets/slides.json';

    constructor(private http: HttpClient) { }

    slides() {
        return this.http.get(this.url);
    }

}