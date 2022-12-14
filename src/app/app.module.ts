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
import { NavBarComponent } from './components/nav-bar/nav-bar.component'



@NgModule({
  declarations: [
    AppComponent,
    GestionUtilisateurComponent,
    ListeFormationsComponent,
    GestionFormateurComponent,
    GestionPayementComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, NgbModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
