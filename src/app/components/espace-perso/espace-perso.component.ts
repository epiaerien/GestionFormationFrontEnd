import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Utilisateurs } from 'src/app/models/utilisateurs';
import { UtilisateurServiceService } from 'src/app/service/utilisateur-service.service';

@Component({
  selector: 'app-espace-perso',
  templateUrl: './espace-perso.component.html',
  styleUrls: ['./espace-perso.component.css']
})
export class EspacePersoComponent implements OnInit{
  

  utilisateurs!: Utilisateurs[]

  utilisateur!: Utilisateurs
  id!:number; 
  idRole!:number
  roles!:Role[];
  cible!:string
  afficher!:boolean; 
  modifok!:boolean; 

  constructor(private utService:UtilisateurServiceService,private router:ActivatedRoute){} 
  ngOnInit(): void {
    this.afficher=false; 
    this.modifok=false; 
    this.id = this.router.snapshot.params['id'];
    

    if(this.id!= undefined)
    {
     this.utilisateurparid();
    }
    else
    {
     this.afficherAll(); 
    }
  }

  afficherAll()
  {
    this.utService.selectAll().subscribe(Response=>this.utilisateurs=Response);
  }
  
  utilisateurparid()
  {
    this.utService.selectById(this.id).subscribe(Response=>this.utilisateur=Response); 
  }


  modifier(id:number)
  {
    this.utService.selectById(id).subscribe(

      response=> this.utilisateur = response
    )

}

add(f:NgForm)
  {
    
      
      this.utService.add(this.utilisateur).subscribe(
      
      response=>{
        this.afficherAll();
        
       
       }
       
    )}
    
    clicSurBouton(){
      this.modifok=true; 
    }

     

  affiche_contenu() {
     /* this.cible = document.getElementById('cible');
      if(this.cible.style.display != '') {
        this.cible.style.display = '';
      } else {
        this.cible.style.display = 'none';
      }
    }*/ 
    this.afficher=true; 
    console.log(this.afficher)
    console.log("ok")
  }
}
  

