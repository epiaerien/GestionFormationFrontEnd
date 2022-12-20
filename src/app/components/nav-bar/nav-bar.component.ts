import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/models/utilisateurs';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnChanges{
  
  utilisateur!:Utilisateurs

  @Input() bool!:string


  constructor(private route:Router, private authService:AuthentificationService){}
  
  
  ngOnChanges(changes: SimpleChanges): void {
    
      console.log(this.utilisateur.nom)
    this.authService.getUser();
    console.log(this.utilisateur.nom)
  }

  
  ngOnInit(): void {
  console.log(this.utilisateur)

  this.getUser()
    
  }

  logout()
  {
    sessionStorage.clear()
    this.route.navigateByUrl('login')
  }

  getUser(){
    
   if(sessionStorage.getItem("userDetails")){
      this.utilisateur = JSON.parse(sessionStorage.getItem("userDetails") ?? "")
    }
 
    
  }

  toLogIn(){
    
    this.route.navigateByUrl('login')
  }


  espaceperso()
  {
    this.route.navigateByUrl(`espaceperso/${this.utilisateur.id}`)
  }
}
