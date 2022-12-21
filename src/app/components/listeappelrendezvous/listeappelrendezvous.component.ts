import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { Commercial } from 'src/app/models/commercial';
import { Prospect } from 'src/app/models/prospect';
import { RendezVous } from 'src/app/models/rendez-vous';
import { AppelServiceService } from 'src/app/service/appel-service.service';
import { CommercialServiceService } from 'src/app/service/commercial-service.service';
import { ProspectServiceService } from 'src/app/service/prospect-service.service';
import { RendezVousServiceService } from 'src/app/service/rendez-vous-service.service';

@Component({
  selector: 'app-listeappelrendezvous',
  templateUrl: './listeappelrendezvous.component.html',
  styleUrls: ['./listeappelrendezvous.component.css']
})
export class ListeappelrendezvousComponent implements OnInit{
id!:number; 
prospect!:Prospect;
commercial!:Commercial; 
adappel!:number

appels!:Appel[];
rdvs!:RendezVous[]; 

constructor(private pservice:ProspectServiceService, private cservice:CommercialServiceService, private route:Router,private router:ActivatedRoute, private aservice:AppelServiceService, private rservice:RendezVousServiceService){}
 
ngOnInit(): void {
  this.prospect=new Prospect()
  this.commercial=new Commercial(); 
  this.id= this.router.snapshot.params['id'];
  this.appelparidparticipant();
    if(this.id!= undefined)
    {
      console.log(this.id)
     this.prospectparid();
    }
    else
    {
     this.afficherAll(); 
    }
}

prospectparid()
{
  this.pservice.selectById(this.id).subscribe(Response=>this.prospect=Response)
}
afficherAll()
  {
  
    this.aservice.selectAll().subscribe(Response=>this.appels=Response);
 
  }

appelparidparticipant()
{
  this.aservice.appelparprospect(this.id).subscribe(Response=>this.appels=Response)
}

commercialparappel()
{
  this.cservice.commercialparappel(this.id).subscribe(Response=>this.commercial=Response)
}

commercialparrdv()
{
  this.cservice.commercialparrdv(this.id).subscribe(Response=>this.commercial=Response)
 
}
}
