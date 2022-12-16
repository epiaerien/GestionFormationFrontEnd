import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
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
  formationNonFaites!:Formation[]  
  
  constructor(private partServ:ParticipantServiceService, private formaionServ:FormationServiceService
    , private router:Router ){}
  ngOnInit(): void {
    this.participant = new Participant();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid();
    this.formationNonFaites = []; 
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
    
  
  afficherFormationsNonFaites(){
    this.formaionServ.selectAll().subscribe(
      resp=>{
        this.formations = resp;
        for(let form of this.formations){
          if(!this.idFormParti.includes(form.id)){
            this.formationNonFaites.push(form)
           console.log("non fait" + form.id)
          }
          console.log(this.formationNonFaites)
        }        
        }            
    )   
  }

  idFormParti:number[] =[];
  ParticipantByid(){    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        this.formaionServ.getFormationByParti(this.participant.id).subscribe(Response2=>
          {
            this.participant.formations=Response2
            console.log( this.participant.formations)
            this.idFormParti = this.participant.formations.map(forms => forms.id);
            console.log(this.idFormParti);
            this.afficherFormationsNonFaites();}            
          )          
          
        }
    )
  }

  addParticipantinFormation()
  {
  for(let form of this.selectedForms){
    form.participants.push(this.participant)
    this.formaionServ.add(form).subscribe(
      resp=>{
        console.log("apres ajout")
        console.log(this.selectedForms)
        this.router.navigateByUrl('gestionParticipants');
      }
    )
  } 
}
}
