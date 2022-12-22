import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { Transaction } from 'src/app/models/transaction';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';
import { PayementServiceService } from 'src/app/service/payement-service.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-gestion-payement',
  templateUrl: './gestion-payement.component.html',
  styleUrls: ['./gestion-payement.component.css']
})
export class GestionPayementComponent implements OnInit{

  participants!: Participant[];
  participant!: Participant;
  
 

  constructor (private partServ:ParticipantServiceService, private formatServ:FormationServiceService,
   private payeServ:PayementServiceService, private transServ:TransactionServiceService){}

  ngOnInit(): void {
    this.getAllParticipant();
    
  }

  getAllParticipant()
    {
      this.partServ.selectAll().subscribe(
        response => {this.participants = response
          for(let part of this.participants)
          {
            this.formatServ.getFormationByParti(part.id).subscribe(Response2=>
              {
                part.formations=Response2
                this.transServ.getAllByIdPart(part.id).subscribe(
                  resp3=>{
                    part.transactions=resp3
                  })                            
          })
          } }
      )
    }

    /*getMontantTolal(idTran:number):number{
      var montantTotal = 0
      this.payeServ.selectByIdTrans(idTran).subscribe(
        resp=>{
          montantTotal=resp.total
        }
      )
      return montantTotal;
    }*/


  getMontantTolal(formations:Formation[]):number
    {
      var montantTotal = 0;
      if(formations.length!=0){
      for(let form of formations){
         montantTotal=montantTotal + form.prix;
         console.log("test" + montantTotal)         
      }
    }
      return montantTotal;
    }

  getMontantPaye(transcation:Transaction[]):number
    {
      var MontantPaye = 0;
      if(transcation.length!=0){
        for(let trans of transcation){
          MontantPaye=MontantPaye + trans.montant;
           console.log("test" + MontantPaye)         
        }
      }
      return MontantPaye;
    }
  
  getMontantDu(formations:Formation[],transcation:Transaction[]):number
    {
      var montantDu = 0;
      montantDu = this.getMontantTolal(formations) - this.getMontantPaye(transcation);
      console.log("test2" + montantDu)  ;
      return montantDu;
      
    }
  
  TrueOrFalsetransaction:Boolean =false;
  idpart:number = 0;
  transaction!:Transaction;
  faireTransaction(id:number){
    this.idpart = id;
    this.TrueOrFalsetransaction=!this.TrueOrFalsetransaction;
  }

  modTrueFalseTrans(bool:string){
    this.TrueOrFalsetransaction=(bool== "true");
    this.getAllParticipant();
    }

  
  
  //:@Input() annonce!:Annonce

}
