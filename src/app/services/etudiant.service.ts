import { Injectable } from '@angular/core';
import {Etudiant} from "../model/etudiant";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  urletudiant : string ="http://localhost:3000/etudiants";
  etudiants : Etudiant[]=
    [
      {id: 1,nom: 'jawedi',prenom: 'aziz',age:22,note: 12,like: 0 },
      {id: 2,nom: 'jawedi',prenom: 'mohamed',age:25,note: 20,like: 1 },
      {id: 3,nom: 'jawedi',prenom: 'jesser',age:19,note: 14,like: 2 },
    ];
  constructor(private http:HttpClient) { }
  getEtudiants():Etudiant []{
    return this.etudiants;
  }
  getEtudiantsJson():Observable<Etudiant []>{
   // return this.http.get<Etudiant[]>("/assets/etudiants.json");
    return this.http.get<Etudiant[]>(this.urletudiant);
  }
  addEtudiant (etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.urletudiant, etudiant, this.httpOptions);}

  deleteEtudiant (etudiant: Etudiant | number): Observable<Etudiant> {
  const id = typeof etudiant === 'number' ? etudiant : etudiant.id;
  const url=this.urletudiant+'/'+id;
  return this.http.delete<Etudiant>(url);
        }
  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.urletudiant +'/'+ id); }
  updateEtudiant (id: number, etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(this.urletudiant+'/'+ id, etudiant, this.httpOptions);
  }
}
