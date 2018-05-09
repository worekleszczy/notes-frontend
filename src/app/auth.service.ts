import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common//http';
import { Observable } from 'rxjs';
import {Token} from './token';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthService {
    public token: string;
 
    constructor(private http: HttpClient) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
 
    login(username: string, password: string): Observable<boolean> {
    console.log("LOGIN");
            this.http.post('localhost:9999/dupa', "WHITTSTST");
        return this.http.post<Token>('http://localhost:8080/signin', JSON.stringify({ username: username, password: password }))
            .map((token) => {
                if(token) {
                    localStorage.setItem('currentUser', JSON.stringify({ username, token: token.token }));
                    return true;
                } else {
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}