import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Etudiant} from "../model/etudiant";
import {EtudiantService} from "../services/etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  list : Etudiant[]=[];
  examenform : FormGroup;
  examenform2 : FormGroup;
  e : Etudiant = new Etudiant();
  fbuilder : FormBuilder = new FormBuilder();
  constructor(private ac:ActivatedRoute, private ps:EtudiantService, private _router:Router) { }
  paramId : string;
  ngOnInit(): void {

    this.examenform = this.fbuilder.group({
      id : ['',Validators.required],
      age : ['',Validators.required],
      note :  ['',[Validators.required, Validators.pattern("[1-9][0-9]*")]],
      like :  ['',[Validators.required, Validators.pattern("[1-9][0-9]*")]],
      nom : ['',[Validators.required, Validators.minLength(3)]],
      prenom : ['',[Validators.required, Validators.minLength(3)]],
    })
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');this.ps.getEtudiantById(Number(res.get('id'))).subscribe(res=>this.e=res)});
  }

  debug(){
    console.log(this.examenform);
  }
  updateEtudiant(){
    this.ps.updateEtudiant(Number(this.paramId),this.e).subscribe(res=>this._router.navigateByUrl("/home"));
  }


  get prenomEtudi() { return this.examenform.get('prenom');}


}


