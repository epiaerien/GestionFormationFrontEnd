import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GestionUtilisateurComponent } from './components/gestion-utilisateur/gestion-utilisateur.component';
import { ListeFormationsComponent } from './components/liste-formations/liste-formations.component';
import { GestionFormateurComponent } from './components/gestion-formateur/gestion-formateur.component';
import { GestionPayementComponent } from './components/gestion-payement/gestion-payement.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { GestionParticipantComponent } from './components/gestion-participant/gestion-participant.component';
import { AjoutFormationComponent } from './components/participant/ajout-formation/ajout-formation.component'


import { GestionCommercialComponent } from './components/gestion-commercial/gestion-commercial.component'


import { ListeParticipantComponent } from './components/liste-participant/liste-participant.component';
import { InfoFormateurComponent } from './components/info-formateur/info-formateur.component';

import { GestionFormationComponent } from './components/gestion-formation/gestion-formation.component';
import { EspacePersoComponent } from './components/espace-perso/espace-perso.component';
import { EspacePersoFormateurComponent } from './components/espace-perso-formateur/espace-perso-formateur.component';





@NgModule({
  declarations: [
    AppComponent,
    GestionUtilisateurComponent,
    ListeFormationsComponent,
    GestionFormateurComponent,
    GestionPayementComponent,
    NavBarComponent,

    GestionParticipantComponent,
    AjoutFormationComponent,


    GestionCommercialComponent,

    ListeParticipantComponent,
    InfoFormateurComponent,
    GestionFormationComponent,
    EspacePersoComponent,
    EspacePersoFormateurComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 

    HttpClientModule,
    NgbModule, 

    HttpClientModule, NgbModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
