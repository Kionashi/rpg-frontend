import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public authToken: string;
    constructor( private router: Router, private cookieService: CookieService) {
        this.authToken = 'no token';
    }

    signOut(): void {
        this.cookieService.delete('token');
        this.router.navigate(['sign-in']);
    }

    ngOnInit() {
        this.authToken = this.cookieService.get('token') ? this.cookieService.get('token'): 'no token2';
    }

}
