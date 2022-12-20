import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { Commercial } from 'src/app/models/commercial';
import { RendezVous } from 'src/app/models/rendez-vous';
import { AppelServiceService } from 'src/app/service/appel-service.service';
import { CommercialServiceService } from 'src/app/service/commercial-service.service';
import { RendezVousServiceService } from 'src/app/service/rendez-vous-service.service';

@Component({
  selector: 'app-gestion-appelet-rdv',
  templateUrl: './gestion-appelet-rdv.component.html',
  styleUrls: ['./gestion-appelet-rdv.component.css']
})
export class GestionAppeletRdvComponent {


  @Input() appel!: Appel;
  appels!:Appel [];
  @Output() newItemEvent = new EventEmitter<string>();


  rdv! : RendezVous;
  rdvs! : RendezVous[];

  idCommercial!: number;
  commercial! : Commercial;
  commercials! : Commercial [];


  constructor(private appservice:AppelServiceService,private rdvservice:RendezVousServiceService, private comService: CommercialServiceService, private route:ActivatedRoute)
  {
    
  }

  ngOnInit():void{
    this.selectAll()
    this.appel = new Appel();
    this.rdv = new RendezVous()
    this.selectAllCommercial();
  }

  selectAll()
{
  this.appservice.selectAll().subscribe(response=>
    {
      console.log(response.length)
      this.appels=response
    })

    this.rdvservice.selectAll().subscribe(response2=>
      {
        console.log(response2.length)
        this.rdvs=response2
      })
}



addAppel (f: NgForm) {

  this.comService.selectById(this.idCommercial).subscribe(
    response => {
      this.appel.commercial = response
      

      this.appservice.getByIdCommercial(this.idCommercial).subscribe(
        response2 => { console.log(response.appels)
        f.resetForm()
      
        this.newItemEvent.emit("refresh")}
      );
      
    }
  )
  

  
}

supprimerAppel(id:number)
{
  this.appservice.delete(id).subscribe(response=>
    {this.selectAll()})
}

modifierAppel(id:number)
  {
    this.appservice.selectById(id).subscribe(

      response=> this.appel = response
    )

}

addRdv()
{
  console.log(this.rdv)
  this.rdvservice.add(this.rdv).subscribe(response=>
    {
      
      this.selectAll()
      
    })
}

supprimerRdv(id:number)
{
  this.rdvservice.delete(id).subscribe(response=>
    {this.selectAll()})
}

modifierRdv(id:number)
  {
    this.rdvservice.selectById(id).subscribe(

      response=> this.rdv = response
    )

}

selectAllCommercial() {

  this.comService.selectAll().subscribe(
    response => {
      this.commercials = response
    }
  )
}
}