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
  
  @Input() idParticipant!: number;

  formations!:Formation[];
  participant!:Participant;
  
  
  constructor(private partServ:ParticipantServiceService, private formaionServ:FormationServiceService ){}
  ngOnInit(): void {
    this.participant = new Participant();
    this.afficherAllFormations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid(); }  
  }

  
  selectedForms:Formation[] = [];

  OnCheckboxSelect(id:Formation, event:any) {
    console.log("bonjour")
    if (event.target.checked === true) {
      this.selectedForms.push(id);
      console.log(this.selectedForms)
    }
    if (event.target.checked === false) {
      this.selectedForms = this.selectedForms.filter((item) => item !== id);
      console.log(this.selectedForms)
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
    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        this.participant.formations = this.formations;
        console.log(this.participant.nom)
        console.log(this.participant.formations)
        }
    )
  }

  addParticipant()
{
  this.participant.formations=this.selectedForms;
  this.partServ.add(this.participant).subscribe(response=>
    {      
      console.log("test" +this.participant.dateNaissance)
      console.log(this.participant.formations)
    })
}


}
