import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css']
})
export class ListeFormateursComponent implements OnInit

{

  formateur!:Formateur;
  formateurs!:Formateur[];
  formation!:Formation;
  formations! : Formation [];
  @Input() idF!:number;

  constructor(private fservice:FormateurServiceService, private router:Router, private formservice:FormationServiceService)
  {

  }
  ngOnInit(): void {
    this.selectAll();
    this.formation = new Formation;

  }


  selectAll()
  {
    this.fservice.selectAll().subscribe(
      Response=>
      {this.formateurs= Response
        for(let form of this.formateurs)
        {
          this.fservice.chercherParFormateur(form.id).subscribe(Response2=>
            {
              this.formation=Response2}
            )
          

        }
      })
  }

  formationparid(id:number)
  {
    this.router.navigateByUrl(`afficherinfoformation/${id}`); 
  }

  }

