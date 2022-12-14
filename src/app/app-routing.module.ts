import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListeFormationsComponent } from './components/liste-formations/liste-formations.component';
import { GestionUtilisateurComponent } from './components/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormateurComponent } from './components/gestion-formateur/gestion-formateur.component';
import { GestionPayementComponent } from './components/gestion-payement/gestion-payement.component';
import { GestionParticipantComponent } from './components/gestion-participant/gestion-participant.component';

const routes:Routes=[
  {path: 'formations', component:ListeFormationsComponent},
  {path: 'gestionPayements', component:GestionPayementComponent},
  {path: 'gestionUtilisateurs', component:GestionUtilisateurComponent},
  {path: 'gestionFormateurs', component:GestionFormateurComponent},
  {path: 'gestionParticipants', component:GestionParticipantComponent}
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)

  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
