import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { Commercial } from 'src/app/models/commercial';
import { RendezVous } from 'src/app/models/rendez-vous';
import { AppelServiceService } from 'src/app/service/appel-service.service';
import { CommercialServiceService } from 'src/app/service/commercial-service.service';
import { RendezVousServiceService } from 'src/app/service/rendez-vous-service.service';

@Component({
  selector: 'app-espace-perso-commercial',
  templateUrl: './espace-perso-commercial.component.html',
  styleUrls: ['./espace-perso-commercial.component.css']
})
export class EspacePersoCommercialComponent {

  commercial!:Commercial;
  commercials!:Commercial[]; 
  idCom!:number; 
  appels!:Appel[]; 
  rdvs!:RendezVous[]; 

  constructor(private comservice:CommercialServiceService,private appservice:AppelServiceService, private rdvservice: RendezVousServiceService,private router:ActivatedRoute, private route:Router, ){}
  

  ngOnInit(): void {
    this.idCom= this.router.snapshot.params['id'];
    

  
    if(this.idCom!= undefined)
    {
     this.commercialparid();
    }
    else
    {
     this.afficherAll(); 
    }

  }

  afficherAll()
  {
    this.comservice.selectAll().subscribe(Response=>this.commercials=Response);
  }


  commercialparid()
  {
   
    this.comservice.commercialparid(this.idCom).subscribe(Response=>this.commercial=Response)
  }

  appelparcommercial(id:number)
  {
    this.route.navigateByUrl(`afficherAppelParCommercial/${id}`);
  }

  rdvparcommercial(id:number)
  {
    this.route.navigateByUrl(`afficherParticipantParFormation/${id}`);
  }

}
