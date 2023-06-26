import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidationErrors, AbstractControl, ValidatorFn} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SignUpResponse } from 'src/app/models/signup-response.model';
import { SignUpError } from 'src/app/models/sign-up-error.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    public errors: any | null
    constructor(private http: HttpClient, private cookieService: CookieService, private router: Router){
        this.errors = null;
    }

    signUpForm = new FormGroup(
        {
            username: new FormControl('', Validators.required),
            password: new FormControl('',Validators.required),
            passwordConfirmation: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email])
        },{
            validators: [this.passwordConfirmation('password','passwordConfirmation')]
        }
    );
   // Custom validation
   passwordConfirmation(password: string, passwordConfirmation: string): ValidatorFn {
        return function (form: AbstractControl): ValidationErrors | null{
            if(form.get(password)?.value !== form.get(passwordConfirmation)?.value) {
                return {passwordsMismatch: true};
            }
            return null;
        }
    }

    signUp(){
        if (this.signUpForm.valid){
            const url = 'http://127.0.0.1:8000/api/v1/rpg/users/';
            // Create the request body
            const body = {
                username: this.signUpForm.value.username,
                password: this.signUpForm.value.password,
                email: this.signUpForm.value.email
            };
            
            // Send the HTTP POST request
            this.http.post<SignUpResponse>(url, body).subscribe(
                {
                    next: (response) => {
                        // Handle successful sign-up
                        this.cookieService.set('token',response.token);
                        this.router.navigate(['/']);
                    },
                    error: (failResponse: SignUpError) => {
                        // Handle sign-up error
                        if(failResponse.status === 400){
                            this.errors = failResponse.error
                        }   
                        console.error('Sign-up error:', failResponse);
                    },
                    complete: () => {
                        console.log('Sign-up completed:');
                    }

                }
            );
        }
        
    }

    
}
