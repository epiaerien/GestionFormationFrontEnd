import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.css']
})
export class AjoutFormationComponent implements OnChanges , OnInit{
  
  @Input() affichezmoi!: Boolean;
  @Input() idParticipant!: number;

  formations!:Formation[];
  participant!:Participant;
  choixformation!:any[];
  
  constructor(private partServ:ParticipantServiceService, private formaionServ:FormationServiceService ){}
  ngOnInit(): void {
    this.participant = new Participant();
    this.afficherAllFormations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid(); }  
  }

  
  selectedIds:Formation[] = [];

  OnCheckboxSelect(id:Formation, event:any) {
    console.log("bonjour")
    if (event.target.checked === true) {
      this.selectedIds.push(id);
      console.log(this.selectedIds)
    }
    if (event.target.checked === false) {
      this.selectedIds = this.selectedIds.filter((item) => item !== id);
      console.log(this.selectedIds)
    }
    
  }
 

  afficherAllFormations(){
    this.formaionServ.selectAll().subscribe(
      resp=>{
        this.formations = resp
      }
    )
  }

  ParticipantByid(){
    console.log("dans fille" +this.idParticipant)
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        console.log(this.participant.nom)
        }
    )
  }

  addParticipant()
{
  this.participant.formations=this.selectedIds
  this.partServ.add(this.participant).subscribe(response=>
    {      
      console.log("test" +this.participant.formations)      
      this.affichezmoi=false;
    })
}


}
