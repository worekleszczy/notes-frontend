import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Note} from '../note';
import {NOTES} from '../mock-notes';
import {NoteService} from '../note.service';
import {AuthService} from '../auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

    username:string;
    password:string;
    error: boolean = false;    
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }
    login() {
        let successful = this.authService.login(this.username, this.password)
        .subscribe(result => {
            if(result) {
                this.router.navigate(["/notes"]);
                this.error = false;
            } else {
                this.error = true;
            }
        }, err => {
            this.error = true;
        });
    }
  ngOnInit() {

  }

}