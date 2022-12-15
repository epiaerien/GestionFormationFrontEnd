import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Role } from 'src/app/models/role';


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

  idRole!:number
  roles!:Role[];



  constructor(private utService:UtilisateurServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
   
    this.selectAll()
    this.selectAllRoles()
    this.utilisateur = new Utilisateurs()
    
    
  }


  selectAll(){

    this.utService.selectAll().subscribe(
      response => this.utilisateurs = response
    )
  }

  add(f:NgForm)
  {
    this.utService.selectRoleById(this.idRole).subscribe(
    response2 => {
      
      this.utilisateur.role = response2
      
      this.utService.add(this.utilisateur).subscribe(
      
      response=>{
        this.selectAll();
        
        f.resetForm();
       }
       
    )}
    )
    
  }

  modifier(id:number)
  {
    this.utService.selectById(id).subscribe(

      response=> this.utilisateur = response
    )

}

delete(id:number)
  {
    this.utService.delete(id).subscribe(
      response=>{this.selectAll()}
    )
  }

  selectAllRoles()
  {
    this.utService.selectAllRoles().subscribe(
      response=>{
        
        this.roles = response
        

        }
      )
  }


}
