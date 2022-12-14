import { Component , OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-gestion-participant',
  templateUrl: './gestion-participant.component.html',
  styleUrls: ['./gestion-participant.component.css']
})
export class GestionParticipantComponent implements OnInit{

  constructor(private partServ:ParticipantServiceService){}

  participants!:Participant[];
  participant!:Participant;
 


  ngOnInit(): void {
    this.selectAll();
    this.participant= new Participant();
    
  }

TrueOrFalseFormation:Boolean =true;
idpart:number = 0;
ajoutFormationChild(id:number){
  console.log("ajoutformationchild " + id);
  this.idpart = id;
  this.TrueOrFalseFormation=false;
}

selectAll()
{
  this.partServ.selectAll().subscribe(response=>
    {
      console.log(response.length)
      this.participants=response
      
    })
}
addParticipant()
{
  console.log(this.participant.dateNaissance)
  this.partServ.add(this.participant).subscribe(response=>
    {      
      this.selectAll()
    })
}

supprimerParticipant (id:number)
{
  this.partServ.delete(id).subscribe(response=>
    {this.selectAll()})
}

ajoutFormation(id:number){

}

ajoutDiplome(id:number){

}

ajoutTransaction(id:number){

}
}
