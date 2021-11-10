import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LinkListService {

    constructor(private http: HttpClient) { }

    getLinks(): Observable<any> {
        const url = 'http://linkify.local/api/public/links';
        return this.http.get(url);
    }


}
