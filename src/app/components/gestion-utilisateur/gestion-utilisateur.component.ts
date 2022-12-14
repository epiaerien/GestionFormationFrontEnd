import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Utilisateurs } from 'src/app/models/utilisateurs';
import { UtilisateurServiceService } from 'src/app/service/utilisateur-service.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit{
  

  utilisateurs!: Utilisateurs[]

  utilisateur!: Utilisateurs


  constructor(private utService:UtilisateurServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
   
    this.selectAll()
    this.utilisateur = new Utilisateurs()

  }


  selectAll(){

    this.utService.selectAll().subscribe(
      response => this.utilisateurs = response
    )
  }

  add(f:NgForm)
  {
    this.utService.add(this.utilisateur).subscribe(
      
      response=>{this.selectAll();
        console.log(this.utilisateur.username);
        f.resetForm();
       }
       
    )
  }


}
