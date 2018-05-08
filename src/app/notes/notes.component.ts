import { Component, OnInit } from '@angular/core';
import {NOTES} from '../mock-notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    notes = NOTES;

  constructor() { }

  ngOnInit() {
  }

}