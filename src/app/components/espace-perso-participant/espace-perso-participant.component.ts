import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { Formation } from 'src/app/models/formation';
import { Formateur } from 'src/app/models/formateur';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-espace-perso-participant',
  templateUrl: './espace-perso-participant.component.html',
  styleUrls: ['./espace-perso-participant.component.css']
})
export class EspacePersoParticipantComponent implements OnInit {


  participant!:Participant; 
participants!:Participant[]; 
idPar!:number;
idForm!:number; 
formations!:Formation[]; 
formateur!:Formateur; 

constructor(private pService:ParticipantServiceService, private router:ActivatedRoute, private route:Router, private formationService:FormationServiceService){}

  ngOnInit(): void {
    this.idPar= this.router.snapshot.params['id'];
    
    if(this.idPar!= undefined)
    {
      this.formationparparticipant();
     this.participantparid();
     this.formateurparformation(); 
    }
    else
    {
      
    }

  }


  afficherAll()
  {
    this.pService.selectAll().subscribe(Response=>
      {
        this.participants=Response;
        for(let pa of this.participants)
        {
            this.formationService.getFormationByParti(pa.id).subscribe(Response=>pa.formations=Response)
        }
      })

  }

  participantparid()
  {
    this.pService.selectById(this.idPar).subscribe(Response=>this.participant=Response)
  }

  participantparformation()
  {   
    this.pService.getByIdFormation(this.idForm).subscribe(Response=>this.participants=Response)
  }

  formationparparticipant()
  {
    this.formationService.getFormationByParti(this.idPar).subscribe(Response=>this.formations=Response)
  }

  formateurparformation()
  {
    this.formationService.chercherParFormation(this.idPar).subscribe(Response=> this.formateur=Response)
  }
}
