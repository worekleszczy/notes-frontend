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

    onSelect(note: Note): void {
      if(this.selectedNote) {
        this.noteService.updateNote(this.selectedNote).subscribe();
      }
      this.selectedNote = note;
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
        this.noteService = null;
        this.getNotes();
      });
    }
  constructor(private noteService: NoteService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.getNotes();
  }

}