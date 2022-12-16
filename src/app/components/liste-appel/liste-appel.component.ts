import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appel } from 'src/app/models/appel';
import { AppelServiceService } from 'src/app/service/appel-service.service';

@Component({
  selector: 'app-liste-appel',
  templateUrl: './liste-appel.component.html',
  styleUrls: ['./liste-appel.component.css']
})
export class ListeAppelComponent implements OnInit{
  
  
  idCom!:number; 
  appels!:Appel[]; 

  constructor(private appservice:AppelServiceService,private router:ActivatedRoute) {}
  


  ngOnInit(): void {
    this.idCom= this.router.snapshot.params['id'];

    if(this.idCom!= undefined)
    {
     this.appelparcommercial();
    }
    else
    {
     this.afficherAll(); 
    }

  }

  afficherAll()
  {
  
    this.appservice.selectAll().subscribe(Response=>this.appels=Response);
 
  }
  appelparcommercial()
  {   
    this.appservice.getByIdCommercial(this.idCom).subscribe(Response=>this.appels=Response)
  }
 
}
