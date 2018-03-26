import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'menu-app',
    templateUrl: './app/layout/menu/menu.component.html',
    styleUrls: ['./app/css/style.css']
})
export class MenuComponent {
    menu = [{ "element": 1, "Label": "Accueil", "Url": "/Accueil" },
        { "element": 2, "Label": "Formation", "Url": "/Formation" },
        { "element": 3, "Label": "Experience", "Url": "/Experience" },
        { "element": 4, "Label": "Suivi de projet", "Url": "/Projet" },
        { "element": 5, "Label": "Loisirs", "Url": "/Loisirs" },
        { "element": 6, "Label": "Contact", "Url": "/Contact" }];

    alerFunc = (route: string) => {
        //alert(route);
    }
}