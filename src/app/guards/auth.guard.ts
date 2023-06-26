import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RefreshTokenResponse } from '../models/refresh-token-response';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const cookieService = inject(CookieService);
    const token = cookieService.get('token');
    const refresh = cookieService.get('refresh');

    console.log('Guarding token: ' + token);
    console.log('Guarding refresh: ' + refresh);
    
    if (!token || typeof(token) === 'undefined') {
        console.log('Not signed in');
        router.navigate(['sign-in']);
        return false;
    }

    authService.checkTokenHealth(token).subscribe({
        next: () => {
            console.log('Health Check successful');
            authService.refreshToken(refresh).subscribe({
                next: (response) => {
                    console.log('Refreshed');
                    console.log(response.access);
                    cookieService.set('token', response.access);
                },
                error: (error) => {
                    console.error('error refreshing token', error);
                    router.navigate(['sign-in']);
                    return false;
                }
            });
            return true;
        },
        error: (error) => {
            if(error.status === HttpStatusCode.Unauthorized){
                console.log('Token expired, please refresh');
                router.navigate(['sign-in']);
                return false;
            }else{
                console.log(error);
            }
            return false;
        }
    });
    
    return true;
};
