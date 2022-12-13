import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { Router } from '@angular/router';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { Formateur } from 'src/app/models/formateur';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {

  formation!:Formation; 
  formations!:Formation[]; 
  formateur!:Formateur; 

  constructor(private forService:FormationServiceService, private router:Router)
  {

  }
  ngOnInit(): void {
this.afficherAll();
  }


  afficherAll()
  {
    this.forService.selectAll().subscribe(Response=>this.formations= Response)
  }

 formateurParFormation(formation:Formation)
 {
  this.forService.chercherParFormation(formation).subscribe(Response=>this.formateur=Response)
 }
}
