import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Etudiant} from "../model/etudiant";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
   @Input() etudiant : Etudiant;
   @Output() liked = new EventEmitter<Etudiant>();
  constructor() { }
  sendNotif()
  {
this.liked.emit(this.etudiant);
  }

  ngOnInit(): void {
  }

}
