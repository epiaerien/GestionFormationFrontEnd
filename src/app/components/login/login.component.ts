import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AuthRequest } from 'src/app/models/auth-request';
import { Utilisateurs } from 'src/app/models/utilisateurs';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  utilisateur!:Utilisateurs

  username!:string
  password!:string

  authRequest!: AuthRequest

  @Output() activate = new EventEmitter<string>();


  constructor(private authService:AuthentificationService, private route:Router){}

  
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
            
            this.activate.emit("refresh")

            //this.route.navigateByUrl('formations')
            
          }
        )
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
