import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {FormEtudiantComponent} from "./form-etudiant/form-etudiant.component";
import { ListeComponent } from "./liste/liste.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
const routes: Routes = [
  {path:"etudiants",component:EtudiantsComponent,children:[

      {path:"detail/:id",component:ListeComponent}

    ]},
  {path:"form",component:FormEtudiantComponent},
  {path:"update/:id",component:ReactiveFormComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
