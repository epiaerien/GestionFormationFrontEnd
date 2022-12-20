import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';



@Component({
  selector: 'app-gestion-formateur',
  templateUrl: './gestion-formateur.component.html',
  styleUrls: ['./gestion-formateur.component.css']
})
export class GestionFormateurComponent {

  formateurs! : Formateur [];

  formateur! : Formateur;

  idFormation!:number
  formation!:Formation
  formations!:Formation[]
 

  constructor(private fservice:FormateurServiceService, private formationservice:FormationServiceService)
  {
    
  }

ngOnInit():void{
  this.selectAll()
  this.formateur = new Formateur()
  this.selectAllFormation()
}


selectAll()
{
  this.fservice.selectAll().subscribe(response=>
    {
      console.log(response.length)
      this.formateurs=response
    })

}
addFormateur(f:NgForm)
{
  console.log(this.formateur.dateNaissance)
  this.fservice.add(this.formateur).subscribe(response=>
    {
      
      this.selectAll()
      f.resetForm()

    })
}

supprimerFormateur (id:number)
{
  this.fservice.delete(id).subscribe(response=>
    {this.selectAll()})
}

modifierFormateur (id:number)
{
  this.fservice.selectById(id).subscribe(

    response=> this.formateur = response)
}


selectAllFormation(){

  this.formationservice.selectAll().subscribe(
    response => {
      this.formations = response
    }
  )

}
}
