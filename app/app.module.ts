import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormationComponent } from './components/formation/formation.component';

import { APP_BASE_HREF, Location } from '@angular/common';


const appRoutes: Routes = [
    {
        path: 'Accueil',
        component: HomeComponent
    },
    {
        path: 'Formation',
        component: FormationComponent
    },
    {
        path: '',
        redirectTo: '/Accueil',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )],
    declarations: [AppComponent, HeaderComponent, MenuComponent, HomeComponent, FormationComponent],
    bootstrap: [AppComponent],
    providers: [
        AppComponent,
        { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
    ]
})
export class AppModule { }