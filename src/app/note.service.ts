// import { Injectable } from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { Note } from './note';
import { NOTES} from './mock-notes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {backend} from './environment';
 
@Injectable()
export class NoteService {

    constructor(private http: HttpClient){}

    getNotes(): Observable<Note[]> {
        let token: string = JSON.parse(localStorage.getItem('currentUser')).token;

        let headers: HttpHeaders = new HttpHeaders({Authorization: "Bearer " + token});
        return this.http.get<Note[]>(backend + "/notes/", {headers});
    }

    updateNote(note: Note): Observable<any> {
        let token: string = JSON.parse(localStorage.getItem('currentUser')).token;

        let headers: HttpHeaders = new HttpHeaders({Authorization: "Bearer " + token});
        return this.http.patch(backend + "/note/" + note.id,{name: note.name, data: note.data}, {headers});
    }

    postNote(name: string): Observable<any> {
        let token: string = JSON.parse(localStorage.getItem('currentUser')).token;

        let headers: HttpHeaders = new HttpHeaders({Authorization: "Bearer " + token});
        return this.http.post(backend + "/note",{name, data: "" }, {headers});
    }

    deleteNote(note: Note): Observable<any> {
        let token: string = JSON.parse(localStorage.getItem('currentUser')).token;

        let headers: HttpHeaders = new HttpHeaders({Authorization: "Bearer " + token});
        return this.http.delete(backend + "/note/" + note.id, {headers});
    }
}