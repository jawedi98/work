import { Component, OnInit } from '@angular/core';
import {Etudiant} from "../model/etudiant";
import {EtudiantService} from "../services/etudiant.service";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  sexe : string = "Homme";
  age  : number = 0;
  etudiants : Etudiant[];
   note(i:number)
   {  //e.note++;
     this.etudiants[i].note++;
     //console.log("test");
   }
  addEtudiant(p: Etudiant)
  {
    this.etudiants.push(p);
  }
   addLikes(p: Etudiant)
   {
     p.like+=1;
   }
   getClass(){
     if(this.age<20){return 'style1';} else return 'style2';
   }
   getColor(){
     if(this.age <20){ return 'red';} else return 'green';
   }
   getSize(){
     if(this.age <20){ return '20px';} else return '50px';
   }

  constructor(private es: EtudiantService) { }

  ngOnInit(): void {
    //this.etudiants = this.ps.getEtudiants();
    this.es.getEtudiantsJson().subscribe(next=>this.etudiants=next);
  }
  updateListe(list : Etudiant[])
  {
this.etudiants=list;
  }
  deleteE(e : Etudiant)
  {
    this.es.deleteEtudiant(e).subscribe(next=>this.es.getEtudiantsJson().subscribe(next=>this.etudiants=next));
  }

}
