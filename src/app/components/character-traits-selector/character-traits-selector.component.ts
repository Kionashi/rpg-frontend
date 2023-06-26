import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Race } from 'src/app/models/race';
import { Job } from 'src/app/models/job';
import { Trait } from 'src/app/models/trait';

@Component({
  selector: 'app-character-traits-selector',
  templateUrl: './character-traits-selector.component.html',
  styleUrls: ['./character-traits-selector.component.scss']
})
export class CharacterTraitsSelectorComponent {
    baseUrl =   'http://127.0.0.1:8000/api/v1/rpg/';
    url =       'http://127.0.0.1:8000/api/v1/rpg/races/'; 
    @Output() traitSelected: EventEmitter<Trait>;
    races: Array<Race> = [];
    jobs: Array<Job> = [];
    authToken = '';
    title = '';
    currentStep = 0;
    currentName: string = ''; // Current name of the character
    currentRace: Partial<Race> = {};
    raceSelected = false;
    jobSelected = false;
    steps: Array<{name:string, title:string}> = [
        { name: 'name',title: 'Choose your name' },
        { name: 'race',title: 'Select your race' },
        { name: 'job',title: 'Select your job' },
    ];
    constructor(private http: HttpClient,private cookieService: CookieService) {
        this.authToken = this.cookieService.get('token') ? this.cookieService.get('token'): 'no token';
        this.traitSelected = new EventEmitter<Trait>();
        this.title = 'Character traits select'
    }

    ngOnInit() {
        const headers = new HttpHeaders().set('Authorization','Bearer '+this.authToken);
        this.title = 'Select a race';
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

    get isValid(): boolean {
        let isValid: boolean = false;
        switch (this.steps[this.currentStep].name) {
            case 'name':
                if(this.currentName && this.currentName !== '') {
                    isValid = true;
                }
                break;
            case 'race':
                    if(this.raceSelected) {
                        isValid = true;
                    }
                    break;
            default:
                isValid = false;
                break;
        }
        
        return isValid;
    }

    selectRace(race:Race) {
        this.raceSelected = true;
        this.currentRace = race;
        const trait: Trait = { name: 'race', value: race};
        this.traitSelected.emit(trait)
    }
    updateName(name:string) {
        this.currentName = name;
        const trait: Trait = {
            name: 'name',
            value: name
        }
        this.traitSelected.emit(trait)
    }

    previousStep() {
        this.currentStep--;
    }

    nextStep() {
        this.currentStep++;
    }

}