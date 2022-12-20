import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-espace-perso-formateur',
  templateUrl: './espace-perso-formateur.component.html',
  styleUrls: ['./espace-perso-formateur.component.css']
})
export class EspacePersoFormateurComponent implements OnInit {
  formateur!:Formateur;
  formateurs!:Formateur[]; 
  @Input() idForm!:number;
  formations!:Formation[]; 
  idformation!:number; 

  constructor(private forService:FormateurServiceService, private router:ActivatedRoute, private route:Router, private formationService:FormationServiceService){}
  

  ngOnInit(): void {
    console.log("tesssssssssst")
    console.log("id depuis child" + this.idForm)
    this.formationparformateur(); 
    this.formations =[]; 




    if(this.idForm!= undefined)
    {
     this.formateurparid();
    }
    else
    {
     this.afficherAll(); 
    }
 
  }

  afficherAll()
  {
    this.forService.selectAll().subscribe(Response=>this.formateurs=Response);
  }


  formateurparid()
  {
   
    this.forService.formateurparid(this.idForm).subscribe(Response=>this.formateur=Response)
  }

  participantparformation(id:number)
  {
    this.route.navigateByUrl(`afficherParticipantParFormation/${id}`);
  }

  changedispo(){
    if (this.formateur.dispo==true ){
      this.formateur.dispo=false; 
    }
    else 
    {
      this.formateur.dispo=true; 
    }
  
  }

  formationparformateur()
  {
    this.formationService.formationparformateur(this.idForm).subscribe(Response=> 
      {
        console.log("ooook")
        this.formations=Response
        console.log(this.formations[0].nom)
      },
      error=>
      {
         console.log("non oooooooooook")
      })
    
  }
}



