import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { RefreshTokenResponse } from '../models/refresh-token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    readonly BASE_URL = 'http://127.0.0.1:8000/api/v1/';

    constructor(private http: HttpClient) { }

    checkTokenHealth(token: string): Observable<boolean> {
        // const headers = new HttpHeaders().set('Authorization','Bearer '+token);
        // const headers = new HttpHeaders().set('Access-Control-Allow-Origin',true);
        
        const body = {
            token: token,
        }
        const url = this.BASE_URL + 'token/health-check/';

        return this.http.post<boolean>(url, body);
        
    }

    refreshToken(refresh: string): Observable<RefreshTokenResponse> {
        const body = {
            refresh: refresh,
        }
        const url = this.BASE_URL + 'token/refresh/';

        return this.http.post<RefreshTokenResponse>(url, body);
    }
}
