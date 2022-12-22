import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { jsPDF } from 'jspdf'; 
import { Diplome } from 'src/app/models/diplome';
import { Participant } from 'src/app/models/participant';
import { DiplomeServiceService } from 'src/app/service/diplome-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';



@Component({
  selector: 'app-generation-diplome',
  templateUrl: './generation-diplome.component.html',
  styleUrls: ['./generation-diplome.component.css']
})
export class GenerationDiplomeComponent implements OnInit, OnChanges {

  @Input() idParticipant!: number;
  @Input() idDipl!: number;

  @Output() generationDiplToPart = new EventEmitter<string>();


  participant!:Participant;
  diplome!:Diplome;

  constructor(private partServ:ParticipantServiceService, private diplServ:DiplomeServiceService){}

  ngOnInit(): void {
    this.participant = new Participant();
    this.diplome = new Diplome();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid();
    this.DiplomeByid();
     
    }  
  }

  @ViewChild('content') content!:ElementRef; 
  public SavePDF():void{  
    let content=this.content.nativeElement;  
    let doc = new jsPDF();        
    doc.html(content); 
    
    doc.save('test.pdf');
    doc.output('dataurlnewwindow');   
  }
  
  idFormParti:number[] =[];
  ParticipantByid(){    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;        
        }
    )
  }
  DiplomeByid(){    
    this.diplServ.selectById(this.idDipl).subscribe(
      resp=>{
        this.diplome =resp;        
        }
    )
  }

  }  


