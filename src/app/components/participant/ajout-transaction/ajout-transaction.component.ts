import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { Payement } from 'src/app/models/payement';
import { Transaction } from 'src/app/models/transaction';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';
import { PayementServiceService } from 'src/app/service/payement-service.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-ajout-transaction',
  templateUrl: './ajout-transaction.component.html',
  styleUrls: ['./ajout-transaction.component.css']
})
export class AjoutTransactionComponent implements OnInit, OnChanges {

  @Input() idParticipant!: number;
  @Output() transToPart = new EventEmitter<string>();

  transaction!:Transaction;
  participant!:Participant;
  TrueOrFalseTransaction!:string;
  payements!:Payement[];
  transactions!:Transaction[];
  transactionParti!:Transaction;
  payement!:Payement;

constructor(private partServ:ParticipantServiceService, private formaionServ:FormationServiceService,
   private transServ:TransactionServiceService,  private payeServ:PayementServiceService){}

  ngOnInit(): void {
    this.transaction = new Transaction();
    this.TrueOrFalseTransaction="false";
    this.payement= new Payement();
    
    }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['idParticipant']){
    this.ParticipantByid(); 
    } 
  } 
  

  annuler(){
    this.transToPart.emit(this.TrueOrFalseTransaction)
  }

  addTansaction()
  {
    this.partServ.add(this.participant).subscribe(response=>
      {      
        console.log("test" +this.participant.dateNaissance)
        console.log(this.participant.formations)
        this.transToPart.emit(this.TrueOrFalseTransaction)
      })
  }

  getFirstTransactionOfPart(){
    /*this.transServ.selectById(this.participant.transactions[0].id).subscribe(
      resp=>{
        this.transactionParti = resp;        
      }
    )*/
  }

  ParticipantByid(){    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
        this.formaionServ.getFormationByParti(this.participant.id).subscribe(Response2=>
          {
            this.participant.formations=Response2;
            this.transServ.selectById(this.participant.transactions[0].id).subscribe(
              resp3=>{
                this.transactionParti = resp3;        
              }
            )
          }
        )
        }
    )
  }

}
