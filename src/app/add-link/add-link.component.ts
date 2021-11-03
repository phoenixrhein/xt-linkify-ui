import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
    
  link = '';

  constructor(private http: HttpClient) { }
  
  addLink(): void {
    const url = 'http://localhost/angular-dummy-backend-server/add.php';

    const headers = new HttpHeaders()
        .set('Accept', 'application/json');

    const params = new HttpParams()
        .set('link', this.link);

    this.http.get<any>(url, { headers, params }).subscribe({
        /*
        next: (flights) => {
            console.log(flights);
        },
        */
        error: (err) => {
            console.log('Error', err);
        }
    });
     
  }

  ngOnInit(): void {
  }

}
