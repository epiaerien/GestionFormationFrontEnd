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

import { ListeFormateursComponent } from './components/liste-formateurs/liste-formateurs.component';

import { EspacePersoComponent } from './components/espace-perso/espace-perso.component';
import { GestionAppeletRdvComponent } from './components/gestion-appelet-rdv/gestion-appelet-rdv.component';
import { ListeAppelComponent } from './components/liste-appel/liste-appel.component';
import { InfoFormationComponent } from './components/info-formation/info-formation.component';
import { LoginComponent } from './components/login/login.component';



const routes:Routes=[
  {path: 'formations', component:ListeFormationsComponent},
  {path: 'gestionPayements', component:GestionPayementComponent},
  {path: 'gestionUtilisateurs', component:GestionUtilisateurComponent},
  {path: 'gestionFormateurs', component:GestionFormateurComponent},

  {path: 'formateurs', component:ListeFormateursComponent},
  {path: 'appels', component: ListeAppelComponent},
  {path: 'gestionParticipants', component:GestionParticipantComponent},
  {path: 'gestionCommercials', component:GestionCommercialComponent},
  {path: 'gestionAppeletRdv', component:GestionAppeletRdvComponent},
  {path: 'test', component:InfoFormationComponent},

  {path:'afficherParticipantParFormation/:id', component:ListeParticipantComponent}, 
  {path:'afficherinfoformateur/:id', component:InfoFormateurComponent},
  {path:'afficherAppelParCommercial/:id', component:ListeAppelComponent},
  {path:'espaceperso/:id', component:EspacePersoComponent},
  {path:'login', component:LoginComponent},
  {path:'afficherinfoformation/:id', component:InfoFormationComponent}


]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)

  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
