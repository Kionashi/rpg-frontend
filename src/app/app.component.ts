import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {}
    title = 'rpg-frontend';
    baseUrl = '127.0.0.1:8000/api/v1/';

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        
        const currentRoute = this.router.config.find(route => event.url.substring(1) === route.path);
        console.log('navigation event =>', event.url.substring(1));
        console.log('router =>',this.router.config);
        console.log('currentRoute =>',currentRoute);
        
        if (currentRoute && currentRoute.data && currentRoute.data['bodyClass']) {
          document.body.className = currentRoute.data['bodyClass'];
        } else {
          document.body.className = '';
        }
      }
    });
  }
}
