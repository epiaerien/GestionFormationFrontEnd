import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { Transaction } from 'src/app/models/transaction';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';
import { PayementServiceService } from 'src/app/service/payement-service.service';

@Component({
  selector: 'app-gestion-payement',
  templateUrl: './gestion-payement.component.html',
  styleUrls: ['./gestion-payement.component.css']
})
export class GestionPayementComponent implements OnInit{

  participants!: Participant[];
  participant!: Participant;
 

  constructor (private partServ:ParticipantServiceService, private formatServ:FormationServiceService,
   private payeServ:PayementServiceService){}

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
                console.log(part.formations)}                
              )
          } }
      )
    }

    getMontantTolal(idTran:number):number{
      var montantTotal = 0
      this.payeServ.selectByIdTrans(idTran).subscribe(
        resp=>{
          montantTotal=resp.total
        }
      )
      return montantTotal;
    }


  /*getMontantTolal(formations:Formation[]):number
    {
      var montantTotal = 0;
      if(formations.length!=0){
      for(let form of formations){
         montantTotal=montantTotal + form.prix;
         console.log ("formation" + form.id + "cumul prix =" + montantTotal)
      }
    }
      return montantTotal;
    }*/

  getMontantPaye(transactions:Transaction[]):number
    {
      var MontantPaye = 0;
      for(let trans of transactions){
        MontantPaye=MontantPaye + trans.montant;
         console.log ("tansaction" + trans.id + "cumul prix payé =" + MontantPaye)
      }
      return MontantPaye;
    }
  
  getMontantDu(idTran:number, transactions:Transaction[]):number
    {
      var montantDu = 0;
      montantDu = this.getMontantTolal(idTran) - this.getMontantPaye(transactions);
      return montantDu;
    }
    
  faireTransaction(id:number){
    this.partServ.selectById(id).subscribe(
      resp => {
        this.participant = resp
       }

    )
  }
  
  //:@Input() annonce!:Annonce

}
