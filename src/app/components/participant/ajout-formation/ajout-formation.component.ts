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
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid(); 
    }  
  }

  
  selectedForms:Formation[] = [];

  OnCheckboxSelect(id:Formation, event:any) {
    if (event.target.checked === true) {
      this.selectedForms.push(id);
      console.log(this.selectedForms)
    }
    if (event.target.checked === false) {
      this.selectedForms = this.selectedForms.filter((item) => item !== id);
      console.log(this.selectedForms)
    }
    
  }
  

  
  formationNonFaites:Formation[] = [];
  test:boolean = false
  afficherFormationsNonFaites(){
    this.formaionServ.selectAll().subscribe(
      resp=>{
        this.formations = resp;
        for(let form of this.formations)
        {
          if(this.participant.formations.includes(form)){
            this.test= true;
          }
          else{this.test = false}
          if(!this.test)
          {this.formationNonFaites.push(form)}
          /*form = form.filter(this.participant.formations => form.id !== this.participant.formations.id).concat(prod);
          
          this.formaionServ.selectById(form.id).subscribe(
            resp2=>{
              this.formationNonFaites.push(form)
              console.log(this.formationNonFaites)
            }
          )*/
        }
      }      
    )
   
  }

  ParticipantByid(){
    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        this.formaionServ.getFormationByParti(this.participant.id).subscribe(Response2=>
          {
            this.participant.formations=Response2
            console.log( this.participant.formations)}
          )

          this.afficherFormationsNonFaites();
        }
    )
  }

  addParticipantinFormation()
{
  for(let form of this.selectedForms){
    form.participants= form.participants.filter(participant => participant.id == this.participant.id)
    console.log(form.participants)
    /*
    form.participants.push(this.participant)
    this.formaionServ.add(form).subscribe(
      resp=>{
        console.log("apres ajout")
        console.log(this.selectedForms)

      }
    )*/
  }
 
}


}
