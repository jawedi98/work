import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../model/etudiant";
import {EtudiantService} from "../services/etudiant.service";
import {EventEmitter, Input,  Output} from '@angular/core';
@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {
  etudiant : Etudiant = new Etudiant() ;
  @Output() newe = new EventEmitter<Etudiant>();
  @Output() newlist = new EventEmitter<Etudiant[]>();

  addEtudiant()
  { console.log(this.etudiant);
    this.es.addEtudiant(this.etudiant).subscribe(next=>this.es.getEtudiantsJson().subscribe(res=>this.newlist.emit(res)));
  }
  constructor(private es:EtudiantService) {

  }

  ngOnInit(): void {
  }
  getEtudiant(){
    console.log(this.etudiant);
  }
}
