import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/models/utilisateurs';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  utilisateur!: Utilisateurs | null

  isLogged!: boolean;

  constructor(private route: Router, private authService: AuthentificationService, private commonService: CommonServiceService) { }



  ngOnInit(): void {

    //this.isLogged = false;
    console.log("islogged  " + this.isLogged)
    this.getUtilisateur()
    console.log(this.utilisateur)
    this.commonService.getUpdate().subscribe(
      message => {

        this.getUtilisateur()
      }
    )

  }

  logout() {
    this.utilisateur = null
    this.isLogged = false
    sessionStorage.clear()
    //this.commonService.sendUpdate('Rerefresh')
    this.route.navigateByUrl('login')
  }

  getUser() {

    if (sessionStorage.getItem("userDetails")) {
      this.utilisateur = JSON.parse(sessionStorage.getItem("userDetails") ?? "")
    }


  }

  getUtilisateur(){

    if (sessionStorage.getItem("userDetails")) {
      console.log('test')
      let sessionUser = sessionStorage.getItem('userDetails');
      this.utilisateur = sessionUser != null ? JSON.parse(sessionUser) : this.utilisateur=null;
      this.isLogged = true;
    }


  }

  toLogIn() {

    this.route.navigateByUrl('login')
  }


  espaceperso() {
    if(this.utilisateur){
    this.route.navigateByUrl(`espaceperso/${this.utilisateur.id}`)}
  }
}
