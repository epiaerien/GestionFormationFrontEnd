import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { Router } from '@angular/router';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { Formateur } from 'src/app/models/formateur';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {

  formation!:Formation; 
  formations!:Formation[]; 
  formateur!:Formateur;
  

  constructor(private forService:FormationServiceService, private router:Router)
  {

  }
  ngOnInit(): void {
this.afficherAll();
this.formateur=new Formateur(); ;
  }


  afficherAll()
  {
    this.forService.selectAll().subscribe(
      Response=>
      {this.formations= Response
        for(let f of this.formations)
        {
          this.forService.chercherParFormation(f.id).subscribe(Response2=>
            {
              f.formateur=Response2}
            )
          

        }
      })
  }


  participantparformation(id:number)
  {
    this.router.navigateByUrl(`afficherParticipantParFormation/${id}`);
  }


  formateurparid(id:number)
  {
    this.router.navigateByUrl(`afficherinfoformateur/${id}`); 
  }
}
