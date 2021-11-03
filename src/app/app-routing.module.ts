import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';

const routes: Routes =
    [
        { path: 'home', component: HomeComponent },
        { path: 'impressum', component: ImpressumComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
