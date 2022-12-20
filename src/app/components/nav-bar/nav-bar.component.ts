import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/models/utilisateurs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  utilisateur!:Utilisateurs

  constructor(private route:Router){}
  
  ngOnInit(): void {

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

}
