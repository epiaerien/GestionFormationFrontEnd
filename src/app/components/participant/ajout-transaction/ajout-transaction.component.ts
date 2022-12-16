import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/participant';
import { Transaction } from 'src/app/models/transaction';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';

@Component({
  selector: 'app-ajout-transaction',
  templateUrl: './ajout-transaction.component.html',
  styleUrls: ['./ajout-transaction.component.css']
})
export class AjoutTransactionComponent implements OnInit {

  @Input() idParticipant!: number;

  transaction!:Transaction;
  participant!:Participant;

constructor(private partServ:ParticipantServiceService){}

  ngOnInit(): void {
    this.transaction = new Transaction();
  }

  addParticipant()
  {
    
    this.partServ.add(this.participant).subscribe(response=>
      {      
        console.log("test" +this.participant.dateNaissance)
        console.log(this.participant.formations)
      })
  }

  ParticipantByid(){
    
    this.partServ.selectById(this.idParticipant).subscribe(
      resp=>{
        this.participant =resp;
          
        }
    )
  }
}
