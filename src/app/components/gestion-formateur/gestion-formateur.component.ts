import { Component } from '@angular/core';
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

  constructor(private fservice:FormateurServiceService)
  {
    
  }



}
