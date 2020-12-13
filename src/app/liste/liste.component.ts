import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
   param : string ;
  constructor(private ar : ActivatedRoute ) { }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(next=>this.param=next.get('id'));
  }

}
