import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkListService } from '../core/services/link-list.service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-link-list',
    templateUrl: './link-list.component.html',
    styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
    /* 
   links = [{
       id: 1,
       link: "https://www.msv-moers.de/news-verein/bilder-vom-umbau-des-rheinpreussenstadions.html",
       createdDate: '14.07.2021',
       read: 1,
       favorite: 1
   }, {
       id: 1,
       link: "https://www.msv-moers.de/news-verein/bilder-vom-umbau-des-rheinpreussenstadions.html",
       createdDate: '14.07.2021',
       read: 0,
       favorite: 0
   }];
 */
    links$: Observable<any>;

    constructor(private linkListService: LinkListService, private http: HttpClient) {
        this.links$ = linkListService.getLinks();
    }

    markAsRead(id: number, event: any): boolean {
        const url = 'http://linkify.local/api/public/link-read/' + id;

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        this.http.post<any>(url, {}, { headers }).subscribe({
            /*
            next: (flights) => {
                console.log(flights);
            },
            */
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
