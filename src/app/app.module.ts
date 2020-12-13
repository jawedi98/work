import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ListeComponent } from './liste/liste.component';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    EtudiantComponent,
    FormEtudiantComponent,
    ReactiveFormComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
