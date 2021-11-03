import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkListService } from '../core/services/link-list.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {
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
  
  constructor(private linkListService: LinkListService) { 
    this.links$ = linkListService.getLinks();
  }


}
