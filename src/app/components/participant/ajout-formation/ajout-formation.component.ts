import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChildren } from '@angular/core';
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

  @Output() formToPart = new EventEmitter<string>();

  formations!:Formation[];  
  participant!:Participant;
  formationNonFaites!:Formation[]  
  TrueOrFalseFormation!:string;
  constructor(private partServ:ParticipantServiceService, private formaionServ:FormationServiceService
    , private router:Router ){}

    
  ngOnInit(): void {
    this.participant = new Participant();
    this.TrueOrFalseFormation="false";
    
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
      
    }
    if (event.target.checked === false) {
      this.selectedForms = this.selectedForms.filter((item) => item !== id);
      
    }
    
  }
    
  
  afficherFormationsNonFaites(){
    this.formaionServ.selectAll().subscribe(
      resp=>{
        this.formations = resp;
        for(let form of this.formations){
          if(!this.idFormParti.includes(form.id)){
            this.formationNonFaites.push(form)
           }
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
            this.idFormParti = this.participant.formations.map(forms => forms.id);
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
        this.formToPart.emit(this.TrueOrFalseFormation)
      }
    )
  } 
}

annuler(){
  this.formToPart.emit(this.TrueOrFalseFormation)
}
}
