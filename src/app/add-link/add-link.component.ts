import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-add-link',
    templateUrl: './add-link.component.html',
    styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
    @Output() myEvent = new EventEmitter();
    link = '';

    constructor(private http: HttpClient) { }

    addLink(): void {
        const url = environment.apiPath + '/link';

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        var params = { link: this.link };

        this.http.post<any>(url, params, { headers }).subscribe({
            error: (err) => {
                console.log('Error', err);
            },
            complete: () => {
                this.link = '';
                this.myEvent.emit(null)

            }
        });
    }

    ngOnInit(): void {
    }

}
