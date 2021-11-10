import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { HomeComponent } from './home/home.component';
import { LinkListComponent } from './link-list/link-list.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        NavbarComponent,
        AddLinkComponent,
        ImpressumComponent,
        HomeComponent,
        LinkListComponent
    ],
    providers: [DatePipe],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
