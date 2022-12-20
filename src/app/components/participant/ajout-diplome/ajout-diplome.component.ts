import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Diplome } from 'src/app/models/diplome';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { DiplomeServiceService } from 'src/app/service/diplome-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';
import { DatePipe } from '@angular/common';

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
  idDiplParti!:number[];
  formations!: Formation[];
  formationNonFaites!: Formation[];

  constructor(private partServ:ParticipantServiceService, private diplServ:DiplomeServiceService, private formaionServ:FormationServiceService
    , private router:Router ){}

   
    
    
  ngOnInit(): void {
    this.participant = new Participant();
    this.TrueOrFalseDiplome="false";
    this.diplomes = []; 
    this.diplome = new Diplome(); 
    this.idDiplParti = [];    
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
    this.diplServ.getAllByIdPart(this.idParticipant).subscribe(
      resp=>{
        this.diplomes = resp;
        for(let dipl of this.diplomes){
          if(dipl.dateOpt===null){
            this.diplomesNonEus.push(dipl)
          }
        }        
        }            
    ) 
    /*this.formaionServ.selectAll().subscribe(
      resp=>{
        this.formations = resp;
        for(let form of this.formations){
          if(!this.idFormParti.includes(form.id)){
            this.formationNonFaites.push(form)
           }
          }        
        }            
    )    */    
  }


  selectedDipl:Diplome[] = [];  
  OnCheckboxSelect(dipl:Diplome, event:any) {
    if (event.target.checked === true) {
      this.selectedDipl.push(dipl);      
    }
    if (event.target.checked === false) {
      this.selectedDipl = this.selectedDipl.filter((item) => item !== dipl);      
    }
    
  }
  addDiplomes()
  {
    let dateTime = new Date();
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(dateTime, 'YYYY-MM-dd')
    for(let dipl of this.selectedDipl){
      dipl.dateOpt=dateTime;
      dipl.participant = this.participant
      this.diplServ.add(dipl).subscribe(
        resp=>{
          this.diplToPart.emit(this.TrueOrFalseDiplome)
        }
      )
    } 
  }

  idFormParti:number[] =[];
  ParticipantByid(){    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        this.diplServ.getAllByIdPart(this.idParticipant).subscribe(resp2=>{
            this.participant.diplomes=resp2;
            console.log("testpartId")
            console.log(this.participant.diplomes)
            this.idDiplParti = this.participant.diplomes.map(dipl => dipl.id); 
            this.formaionServ.getFormationByParti(this.participant.id).subscribe(Response3=>
              {
                this.participant.formations=Response3
                this.idFormParti = this.participant.formations.map(forms => forms.id);
                this.afficherDiplomeNonFaits();
                }            
              )            
        }
          )
        }
    )
  }
}
