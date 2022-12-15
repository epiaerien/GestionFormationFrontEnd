import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/participant';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.css']
})
export class ListeParticipantComponent implements OnInit {

idForm!:number; 
participants!:Participant[]; 

  

constructor(private parService:ParticipantServiceService,private router:ActivatedRoute) {}
 
ngOnInit(): void {
    this.idForm= this.router.snapshot.params['id'];

    if(this.idForm!= undefined)
    {
     this.participantparformation();
    }
    else
    {
     this.afficherAll(); 
    }

  }

  afficherAll()
  {
  
    this.parService.selectAll().subscribe(Response=>this.participants=Response);
 
  }
  participantparformation()
  {   
    this.parService.getByIdFormation(this.idForm).subscribe(Response=>this.participants=Response)
  }
 
}
