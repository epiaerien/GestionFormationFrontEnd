import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-info-formation',
  templateUrl: './info-formation.component.html',
  styleUrls: ['./info-formation.component.css']
})
export class InfoFormationComponent {
  formation! : Formation;
  formations! : Formation[];
  idF!:number;
  formateurs!:Formateur [];

  constructor(private forService:FormateurServiceService, private router:ActivatedRoute, private route:Router, private formationService:FormationServiceService)
  {

  }


  ngOnInit(): void {
    this.idF= this.router.snapshot.params['id'];
  
    if(this.idF!= undefined)
    {
     this.formationparid();
    }
    else
    {
     this.afficherAll(); 
    }
  }
  
  afficherAll()
  {
    this.formationService.selectAll().subscribe(Response=>this.formations=Response);
  }


  formationparid()
  {
   
    this.formationService.formationparid(this.idF).subscribe(Response=>this.formation=Response)
  }

  
 


}
