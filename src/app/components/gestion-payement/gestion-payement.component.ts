import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { Transaction } from 'src/app/models/transaction';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-gestion-payement',
  templateUrl: './gestion-payement.component.html',
  styleUrls: ['./gestion-payement.component.css']
})
export class GestionPayementComponent implements OnInit{

  participants!: Participant[];
  participant!: Participant;
 

  constructor (private partServ:ParticipantServiceService){}

  ngOnInit(): void {
    this.getAllParticipant();
  }

  getAllParticipant()
    {
      this.partServ.selectAll().subscribe(
        response => {this.participants = response}
      )
    }

  getMontantTolal(formations:Formation[]):number
    {
      var montantTotal = 0;
      for(let form of formations){
         montantTotal=montantTotal + form.prix;
         console.log ("formation" + form.id + "cumul prix =" + montantTotal)
      }
      return montantTotal;
    }

  getMontantPaye(transactions:Transaction[]):number
    {
      var MontantPaye = 0;
      for(let trans of transactions){
        MontantPaye=MontantPaye + trans.montant;
         console.log ("tansaction" + trans.id + "cumul prix payé =" + MontantPaye)
      }
      return MontantPaye;
    }
  
  getMontantDu(formations:Formation[], transactions:Transaction[]):number
    {
      var montantDu = 0;
      montantDu = this.getMontantTolal(formations) - this.getMontantPaye(transactions);
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
