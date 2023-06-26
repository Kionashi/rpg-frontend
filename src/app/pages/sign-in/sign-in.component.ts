import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInResponse } from 'src/app/models/sign-in-response.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

    signInForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required])
    });
    constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
    }

    signIn(): void {
        if (this.signInForm.valid){
            const url = 'http://127.0.0.1:8000/api/v1/token/';
            // Create the request body
            const body = {
                username: this.signInForm.value.username,
                password: this.signInForm.value.password
            };
            
            // Send the HTTP POST request
            this.http.post<SignInResponse>(url, body).subscribe(
                {
                    next: (response) => {
                        // Handle successful sign-up
                        this.cookieService.set('token',response.access);
                        this.cookieService.set('refresh',response.refresh);
                    },
                    error: (failResponse) => {
                        // Handle sign-up error
                        console.error('Sign-in error:', failResponse);
                    },
                    complete: () => {
                        console.log('Sign-in completed:');
                        this.router.navigate(['/']);
                    }
                }
            );
        }
    }
    test(): void {
        const url = 'http://127.0.0.1:8000/api/v1/rpg/races/'; 
        
        // Send the HTTP POST request
        this.http.get(url).subscribe(
            {
                next: (response) => {
                    // Handle successful sign-up
                    console.log('SUCCESS', response);
                },
                error: (failResponse) => {
                    // Handle sign-up error
                    console.error('Sign-in error:', failResponse);
                },
                complete: () => {
                    console.log('Test completed:');
                }
            }
                
        );
    }
}
