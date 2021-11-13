import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LinkListService {

    constructor(private http: HttpClient) { }

    getLinks(): Observable<any> {
        const url = environment.apiPath + '/links';
        return this.http.get(url);
    }


}
