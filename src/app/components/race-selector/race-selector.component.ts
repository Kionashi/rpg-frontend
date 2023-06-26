import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Race } from 'src/app/models/race';
import { SummaryElement } from 'src/app/models/summary-element';

@Component({
  selector: 'app-race-selector',
  templateUrl: './race-selector.component.html',
  styleUrls: ['./race-selector.component.scss']
})
export class RaceSelectorComponent {

    baseUrl =   'http://127.0.0.1:8000/api/v1/rpg/';
    url =       'http://127.0.0.1:8000/api/v1/rpg/races/'; 
    @Output() raceSelected: EventEmitter<Race>;
    races: Array<Race> = [];
    authToken = '';
    constructor(private http: HttpClient,private cookieService: CookieService) {
        this.authToken = this.cookieService.get('token') ? this.cookieService.get('token'): 'no token';
        this.raceSelected = new EventEmitter<Race>();
    }

    ngOnInit() {
        const headers = new HttpHeaders().set('Authorization','Bearer '+this.authToken);
        
        console.log(this.authToken);
        let options = {
            headers: headers
        }
        this.http.get<Array<Race>>(this.url,options).subscribe({
            next: (response) => {
                console.log(response);
                this.races = response
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log('Completed');
            }
        })
    }

    selectRace(race:Race) {
        console.log('race selected', race);
        this.raceSelected.emit(race)
    }

}
