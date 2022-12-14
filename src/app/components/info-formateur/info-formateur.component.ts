import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-info-formateur',
  templateUrl: './info-formateur.component.html',
  styleUrls: ['./info-formateur.component.css']
})
export class InfoFormateurComponent {
  formateur!:Formateur;
  formateurs!:Formateur[]; 
  idForm!:number; 
  formations!:Formation[]; 

  constructor(private forService:FormateurServiceService, private router:ActivatedRoute, private route:Router, private formationService:FormationServiceService)
  {

  }
  ngOnInit(): void {
    this.idForm= this.router.snapshot.params['id'];
    

   
    

    if(this.idForm!= undefined)
    {
     this.formateurparid();
    }
    else
    {
     this.afficherAll(); 
    }

  }

  afficherAll()
  {
    this.forService.selectAll().subscribe(Response=>this.formateurs=Response);
  }


  formateurparid()
  {
   
    this.forService.formateurparid(this.idForm).subscribe(Response=>this.formateur=Response)
  }

  participantparformation(id:number)
  {
    this.route.navigateByUrl(`afficherParticipantParFormation/${id}`);
  }
}
