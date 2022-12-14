import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';

@Component({
  selector: 'app-gestion-formateur',
  templateUrl: './gestion-formateur.component.html',
  styleUrls: ['./gestion-formateur.component.css']
})
export class GestionFormateurComponent {

  formateurs! : Formateur [];

  formateur! : Formateur;

  constructor(private fservice:FormateurServiceService, private route:ActivatedRoute)
  {
    
  }

ngOnInit():void{
  this.selectAll()
  this.formateur = new Formateur()
}


selectAll()
{
  this.fservice.selectAll().subscribe(response=>
    {
      console.log(response.length)
      this.formateurs=response
    })
}
addFormateur()
{
  console.log(this.formateur.dateNaissance)
  this.fservice.add(this.formateur).subscribe(response=>
    {
      
      this.selectAll()
      
    })
}

supprimerFormateur (id:number)
{
  this.fservice.delete(id).subscribe(response=>
    {this.selectAll()})
}

modifierFormateur ()
{
  this.fservice.remove(this.formateur).subscribe(response=>
    {this.selectAll()})
}
}


