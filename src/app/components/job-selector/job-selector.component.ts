import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-selector',
  templateUrl: './job-selector.component.html',
  styleUrls: ['./job-selector.component.scss']
})
export class JobSelectorComponent {
    baseUrl =   'http://127.0.0.1:8000/api/v1/rpg/';
    url =       'http://127.0.0.1:8000/api/v1/rpg/jobs/'; 
    @Output() jobSelected: EventEmitter<Job>;
    jobs: Array<Job> = [];
    authToken = '';
    @Input() raceId: number = 0;
    constructor(private http: HttpClient,private cookieService: CookieService) {
        this.authToken = this.cookieService.get('token') ? this.cookieService.get('token'): 'no token';
        this.jobSelected = new EventEmitter<Job>();
    }

    ngOnInit() {
        const headers = new HttpHeaders().set('Authorization','Bearer '+this.authToken);
        let filters = {
            filterEquals: 'juanito',
            filtersLike: 'ARR'
        }
        let params = new HttpParams({fromObject: filters});
        let options = {
            headers: headers,
            params: params,
        }
        console.log('race id =',this.raceId);
        
        console.log('QUERYPARAMS',params);
        
        this.http.get<Array<Job>>(this.url,options).subscribe({
            next: (response) => {
                console.log(response);
                this.jobs = response
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log('Completed');
            }
        })
    }

    selectRace(job:Job) {
        console.log('race selected', job);
        this.jobSelected.emit(job)
    }
}
