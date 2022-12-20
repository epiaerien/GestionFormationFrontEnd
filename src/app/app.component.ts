import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from './models/utilisateurs';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'AppFormation';

  utilisateur!:Utilisateurs

  bool!:string

  constructor( private authService:AuthentificationService){}
 
  ngOnInit(): void {
    this.authService.getUser()
    console.log(this.utilisateur)
  }

  logginEvent(bool:any){
    if(bool==='refresh'){
      console.log("refresh ok")
  this.bool = bool

      this.authService.getUser()
    }

  }



  
}
