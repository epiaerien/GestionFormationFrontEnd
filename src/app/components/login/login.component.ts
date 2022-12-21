import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AuthRequest } from 'src/app/models/auth-request';
import { Utilisateurs } from 'src/app/models/utilisateurs';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  utilisateur!:Utilisateurs

  username!:string
  password!:string
test!:boolean; 
  authRequest!: AuthRequest


  constructor(private authService:AuthentificationService, private route:Router, private commonService:CommonServiceService){}

  
  ngOnInit(): void {
   
  }

  login() {

    let req = new AuthRequest();
    req.username = this.username
    req.password = this.password

    this.authService.auth(req).subscribe(
      response => {
        console.log(response.jwt)
        
        let authChain = 'Bearer ' + response.jwt;
        sessionStorage.setItem('token', authChain)
        
        this.authService.findByUsername(this.username).subscribe(
          
          
          response2 => {
            this.utilisateur = response2;
            sessionStorage.setItem('userDetails', JSON.stringify(this.utilisateur));
            //this.logged.next(true);
            //var header: NavbarComponent = new NavbarComponent(this.route);
            // header.reload();
            
            this.commonService.sendUpdate('refresh')

            //this.route.navigateByUrl('formations')
            this.test=false; 

            this.route.navigateByUrl(`espaceperso/${this.utilisateur.id}`)
            

          }
        )
      },
      error=>{
        console.log('cnx non ok')
        this.test = true;
  
      }

    )

  }

  




//   checkStatus() {
//     if (localStorage.getItem('token')) {
//       this.logged.next(true);
//     } else {
//       this.logged.next(false);
//     }
// }

}
