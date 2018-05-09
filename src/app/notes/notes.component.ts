import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NOTES} from '../mock-notes';
import {NoteService} from '../note.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NoteService, AuthService]
})
export class NotesComponent implements OnInit {

    notes:Note[];
    selectedNote: Note;
    newNoteName: string;
    username: string = JSON.parse(localStorage.getItem('currentUser')).username;

    onSelect(note: Note): void {
      if(this.selectedNote) {
        this.noteService.updateNote(this.selectedNote).subscribe();
      }
      if(this.selectedNote === note) {
        this.selectedNote = undefined
      } else {
        this.selectedNote = note;
      }
    }

    getNotes(): void {
      this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);      
    }

    logout() {
      this.auth.logout();
      this.router.navigate(["/login"]);
      
    }

    addNote() {
      this.noteService.postNote(this.newNoteName).subscribe(result => {

        this.newNoteName = "";
        this.getNotes();
      });
    }

    deleteNote() {
      this.noteService.deleteNote(this.selectedNote).subscribe(result => {
        this.selectedNote = undefined;
        this.getNotes();
      });
    }
  constructor(private noteService: NoteService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.getNotes();
  }

}