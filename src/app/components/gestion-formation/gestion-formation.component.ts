import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})
export class GestionFormationComponent implements OnInit {
  

  formation!:Formation
  formations!:Formation[]

  idFormateur!:number
  formateur!:Formateur
  formateurs!:Formateur[]

  constructor(private formService:FormationServiceService, private formateurService:FormateurServiceService){}
  
  ngOnInit(): void {

    this.formation = new Formation()
    this.selectAllFormateur()
   
    
  }

  add(f:NgForm)
  {
    
    this.formateurService.selectById(this.idFormateur).subscribe(
      response => {
        this.formation.formateur = response
      this.formService.add(this.formation).subscribe(
      
      response2=>{
        f.resetForm();
       }
       
    )
  }
    )
    
  }

  afficherAll()
  {
    this.formService.selectAll().subscribe(
      Response=>
      {this.formations= Response
        for(let f of this.formations)
        {
          this.formService.chercherParFormation(f.id).subscribe(Response2=>
            {
              f.formateur=Response2}
            )
          

        }
      })
  }


  selectAllFormateur(){

    this.formateurService.selectAll().subscribe(
      response => {
        this.formateurs = response
      }
    )

  }





}
