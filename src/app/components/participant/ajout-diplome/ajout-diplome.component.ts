import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Diplome } from 'src/app/models/diplome';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { DiplomeServiceService } from 'src/app/service/diplome-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-ajout-diplome',
  templateUrl: './ajout-diplome.component.html',
  styleUrls: ['./ajout-diplome.component.css']
})
export class AjoutDiplomeComponent {

  @Input() idParticipant!: number;

  @Output() diplToPart = new EventEmitter<string>();

  TrueOrFalseDiplome!:string;
  participant!:Participant;
  diplomes!:Diplome[];
  diplome!:Diplome;
  diplomesNonEus!:Diplome[];
  nomDiplParti!:string[];
  formations!: Formation[];
  formationNonFaites!: Formation[];

  constructor(private partServ:ParticipantServiceService, private diplServ:DiplomeServiceService, private formaionServ:FormationServiceService
    , private router:Router ){}

    
  ngOnInit(): void {
    this.participant = new Participant();
    this.TrueOrFalseDiplome="false";
    this.diplomes = []; 
    this.diplome = new Diplome(); 
    this.nomDiplParti = [];    
    this.diplomesNonEus =[]; 
    this.formations = [];
    this.formationNonFaites =[];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid();
     
    }  
  }

  annuler(){
    this.diplToPart.emit(this.TrueOrFalseDiplome)
  }

  afficherDiplomeNonFaits(){
    /*this.diplServ.selectAll().subscribe(
      resp=>{
        this.diplomes = resp;
        for(let form of this.participant.formations){
          if(form.diplomes!=null){
          for(let dipl of form.diplomes){
          if(!this.nomDiplParti.includes(dipl.nom)){
            this.diplomesNonFaits.push(dipl)
            console.log("test")
            console.log(this.diplomesNonFaits)
           }
          }
          }
        }        
        }            
    ) */
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


  selectedNameDipl:string[] = [];  
  OnCheckboxSelect(nom:string, event:any) {
    if (event.target.checked === true) {
      this.selectedNameDipl.push(nom);      
    }
    if (event.target.checked === false) {
      this.selectedNameDipl = this.selectedNameDipl.filter((item) => item !== nom);
      
    }
    
  }
  addDiplomes()
  {
    for(let nom of this.selectedNameDipl){

    }
    /*this.participant.diplomes = (this.selectedDipl)   
    this.partServ.add(this.participant).subscribe(response=>
      {      
        this.diplToPart.emit(this.TrueOrFalseDiplome)
      })*/
  }

  idFormParti:number[] =[];
  ParticipantByid(){    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        this.nomDiplParti = this.participant.diplomes.map(dipl => dipl.nom);
        this.formaionServ.getFormationByParti(this.participant.id).subscribe(Response2=>
          {
            this.participant.formations=Response2
            this.idFormParti = this.participant.formations.map(forms => forms.id);
            this.afficherDiplomeNonFaits();
            }            
          )          
          
        }
    )
  }
}
