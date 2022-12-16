import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { RendezVous } from 'src/app/models/rendez-vous';
import { AppelServiceService } from 'src/app/service/appel-service.service';
import { RendezVousServiceService } from 'src/app/service/rendez-vous-service.service';

@Component({
  selector: 'app-gestion-appelet-rdv',
  templateUrl: './gestion-appelet-rdv.component.html',
  styleUrls: ['./gestion-appelet-rdv.component.css']
})
export class GestionAppeletRdvComponent {

  appel!:Appel;
  appels!:Appel [];

  rdv! : RendezVous;
  rdvs! : RendezVous[];

  constructor(private appservice:AppelServiceService,private rdvservice:RendezVousServiceService, private route:ActivatedRoute)
  {
    
  }

  ngOnInit():void{
    this.selectAll()
    this.appel = new Appel();
    this.rdv = new RendezVous()
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

addAppel()
{
  console.log(this.appel)
  this.appservice.add(this.appel).subscribe(response=>
    {
      
      this.selectAll()
      
    })
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
}
