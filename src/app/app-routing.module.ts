import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormationsComponent } from './components/liste-formations/liste-formations.component';
import { GestionUtilisateurComponent } from './components/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormateurComponent } from './components/gestion-formateur/gestion-formateur.component';
import { GestionPayementComponent } from './components/gestion-payement/gestion-payement.component';
import { GestionParticipantComponent } from './components/gestion-participant/gestion-participant.component';

import { GestionCommercialComponent } from './components/gestion-commercial/gestion-commercial.component';

import { ListeParticipantComponent } from './components/liste-participant/liste-participant.component';
import { InfoFormateurComponent } from './components/info-formateur/info-formateur.component';


const routes:Routes=[
  {path: 'formations', component:ListeFormationsComponent},
  {path: 'gestionPayements', component:GestionPayementComponent},
  {path: 'gestionUtilisateurs', component:GestionUtilisateurComponent},
  {path: 'gestionFormateurs', component:GestionFormateurComponent},

  {path: 'gestionParticipants', component:GestionParticipantComponent}
  


  {path: 'gestionCommercials', component:GestionCommercialComponent}

  {path:'afficherParticipantParFormation/:id', component:ListeParticipantComponent}, 
  {path:'afficherinfoformateur/:id', component:InfoFormateurComponent}


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)

  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
