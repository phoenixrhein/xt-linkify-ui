import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkListService } from '../core/services/link-list.service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-link-list',
    templateUrl: './link-list.component.html',
    styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

    links$: Observable<any>;

    constructor(private linkListService: LinkListService, private http: HttpClient) {
        this.links$ = linkListService.getLinks();
    }

    markAsRead(id: number, event: any): boolean {
        const url = environment.apiPath + '/link-read/' + id;

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        this.http.post<any>(url, {}, { headers }).subscribe({
            error: (err) => {
                console.log('Error', err);
            }
        });
        event.srcElement.classList.remove("isRead");
        event.srcElement.classList.add("isRead");
        return true;
    }

    reload(): void {
        this.links$ = this.linkListService.getLinks();
    }

    ngOnInit(): void {
    }

}
