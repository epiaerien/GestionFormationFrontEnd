import { Component , OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { Transaction } from 'src/app/models/transaction';
import { DiplomeServiceService } from 'src/app/service/diplome-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-gestion-participant',
  templateUrl: './gestion-participant.component.html',
  styleUrls: ['./gestion-participant.component.css']
})
export class GestionParticipantComponent implements OnInit{

  constructor(private partServ:ParticipantServiceService, private formationServ:FormationServiceService,
    private diplServ:DiplomeServiceService){}

  participants!:Participant[];
  participant!:Participant;
  transaction!:Transaction;
 
  ngOnInit(): void {
    this.selectAll();
    this.participant= new Participant();
    this.transaction = new Transaction ();    
  }

TrueOrFalseFormation:Boolean =false;
idpart:number = 0;
ajoutFormationChild(id:number){  
  this.TrueOrFalsetransaction=false
  this.TrueOrFalseDiplome=false
  this.idpart = id;
  this.TrueOrFalseFormation=!this.TrueOrFalseFormation; 
}

modTrueFalseForm(bool:string){
this.TrueOrFalseFormation=(bool== "true");
this.selectAll();
}

TrueOrFalsetransaction:Boolean =false;
ajoutTransactionChild(id:number){
  this.TrueOrFalseFormation=false
  this.TrueOrFalseDiplome=false
  this.idpart = id;
  this.TrueOrFalsetransaction=!this.TrueOrFalsetransaction;

}
modTrueFalseTrans(bool:string){
  this.TrueOrFalsetransaction=(bool== "true");
  this.selectAll();
  }


TrueOrFalseDiplome:Boolean =false;
ajoutDiplomeChild(id:number){
  this.TrueOrFalseFormation=false
  this.TrueOrFalsetransaction=false
  this.idpart = id;
  this.TrueOrFalseDiplome=!this.TrueOrFalseDiplome; 
}

modTrueFalseDipl(bool:string){
    this.TrueOrFalseDiplome=(bool== "true");
    this.selectAll();
    }



selectAll()
{
  this.partServ.selectAll().subscribe(response=>
    {      
      this.participants=response
      for(let part of this.participants)
        {
          this.formationServ.getFormationByParti(part.id).subscribe(Response2=>
            {
              part.formations=Response2
            }
            )
            this.diplServ.getAllByIdPart(part.id).subscribe(Resp3=>
              {
                part.diplomes=Resp3
              })
        }  
            
    })
}
addParticipant()
{
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
}
