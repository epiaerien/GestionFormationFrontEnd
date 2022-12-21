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
import { AuthGuardService } from './service/auth-guard.service';
import { GestionFormationComponent } from './components/gestion-formation/gestion-formation.component';
import { GestionProspectComponent } from './components/gestion-prospect/gestion-prospect.component';
import { ListeappelrendezvousComponent } from './components/listeappelrendezvous/listeappelrendezvous.component';



const routes:Routes=[
  {path: 'formations', component:ListeFormationsComponent},
  {path: 'gestionPayements', component:GestionPayementComponent, canActivate : [AuthGuardService], data : {role:['Admin','Assistant']}},
  {path: 'gestionUtilisateurs', component:GestionUtilisateurComponent, canActivate : [AuthGuardService], data : {role: ['Admin']}},
  {path: 'gestionFormateurs', component:GestionFormateurComponent, canActivate : [AuthGuardService], data : {role:['Admin','Assistant']}},
  {path: 'gestionFormation', component:GestionFormationComponent, canActivate : [AuthGuardService], data : {role:['Admin','Assistant']}},

  {path: 'formateurs', component:ListeFormateursComponent, canActivate : [AuthGuardService], data : {role:['Admin','Assistant']}},
  {path: 'appels', component: ListeAppelComponent, canActivate : [AuthGuardService], data : {role:['Admin','Commercial']}},
  {path: 'gestionParticipants', component:GestionParticipantComponent, canActivate : [AuthGuardService], data : {role:['Admin','Formateur']}},
  {path: 'gestionCommercials', component:GestionCommercialComponent, canActivate : [AuthGuardService], data : {role:['Admin']}},
  {path: 'gestionAppeletRdv', component:GestionAppeletRdvComponent, canActivate : [AuthGuardService], data : {role:['Admin','Commercial']}},
  {path: 'test', component:InfoFormationComponent},

  {path:'afficherParticipantParFormation/:id', component:ListeParticipantComponent, data : {role:['Admin','Formateur']}}, 

  {path:'afficherinfoformateur/:id', component:InfoFormateurComponent, canActivate : [AuthGuardService], data : {role:['Admin']}},
  {path:'afficherAppelParCommercial/:id', component:ListeAppelComponent, canActivate : [AuthGuardService], data : {role:['Admin','Commercial']}},
  {path:'espaceperso/:id', component:EspacePersoComponent, canActivate : [AuthGuardService], data : {role:['Admin','Commercial','Participant','Formateur','Assistant']}},
  {path:'login', component:LoginComponent},

  {path:'gestionProspect', component:GestionProspectComponent}, 
  {path:'listeappeletrdvparprospect/:id', component:ListeappelrendezvousComponent},

  {path:'gestionProspect', component:GestionProspectComponent, canActivate : [AuthGuardService], data : {role:['Admin','Commercial']}}



]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)

  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
