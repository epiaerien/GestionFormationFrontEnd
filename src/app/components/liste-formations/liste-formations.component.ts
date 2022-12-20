import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { Router } from '@angular/router';
import { FormationServiceService } from 'src/app/service/formation-service.service';
import { Formateur } from 'src/app/models/formateur';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Utilisateurs } from 'src/app/models/utilisateurs';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {

  formation!:Formation; 
  formations!:Formation[]; 

  formateur!:Formateur;
  change!:boolean
  

  utilisateur !: Utilisateurs
  
  constructor(private forService:FormationServiceService, private router:Router, private authService:AuthentificationService)
  {

  }

  ngOnInit(): void {
  
  

  this.afficherAll();
  this.formateur=new Formateur();
  this.formation = new Formation()
  this.change = false
  
  console.log("onInit" + this.change)
  
}

  showhideComponent():boolean
  {
    this.utilisateur = this.authService.getUser()
    var visible:boolean = false;

    if(this.utilisateur)
    {
      visible = true;
    }
 return visible
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

  modifier(id:number){
  
    this.forService.selectById(id).subscribe(

    response => this.formation = response
  )

  }
  delete(id:number){
    
  }


  formateurparid(id:number)
  {
    this.router.navigateByUrl(`afficherinfoformateur/${id}`); 
  }

  onSubmitChange(bool:string){
  
    if(bool=="refresh"){
    this.afficherAll()}


  }

}
