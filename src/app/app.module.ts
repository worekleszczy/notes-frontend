import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component'; 
import { LoginComponent } from './login/login.component'; 
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [AppComponent, NotesComponent, LoginComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { };