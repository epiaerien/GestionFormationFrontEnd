import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, createUrlTreeFromSnapshot, Router } from '@angular/router';
import { Assistant } from 'src/app/models/assistant';
import { Commercial } from 'src/app/models/commercial';
import { Formateur } from 'src/app/models/formateur';
import { Participant } from 'src/app/models/participant';
import { Role } from 'src/app/models/role';


import { Utilisateurs } from 'src/app/models/utilisateurs';
import { AssistantServiceService } from 'src/app/service/assistant-service.service';
import { CommercialServiceService } from 'src/app/service/commercial-service.service';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { ParticipantServiceService } from 'src/app/service/participant-service.service';
import { UtilisateurServiceService } from 'src/app/service/utilisateur-service.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit{
  

  utilisateurs!: Utilisateurs[]

  utilisateur!: Utilisateurs

  commercials!:Commercial[]

  participants!:Participant[]

  formateurs!:Formateur[]

  assistants!:Assistant[]


  idRole!:number
  roles!:Role[];

  utMap = new Map<string, number[]>([
    ["Commercial", []],
    ["Participant", []],
    ["Formateur", []],
    ["Assistant", []]
    
]);


  constructor(private utService:UtilisateurServiceService, 
    private comService:CommercialServiceService, 
    private partService:ParticipantServiceService, 
    private formService:FormateurServiceService, 
    private assistService:AssistantServiceService ,
    private route:ActivatedRoute){}

    
  ngOnInit(): void {
   
    this.selectAll()
    
    this.getCommercials()
    this.getParticipant()
    this.getFormateur()
    this.getAssitant()
    this.selectAllRoles()
    this.utilisateur = new Utilisateurs()
    this.utMap.forEach((value, key) => {

      console.log(value, key)
      
      })
    
    
  }


  selectAll(){

    this.utService.selectAll().subscribe(
      response => { this.utilisateurs = response

    
  } )
  }

  getCommercials(){
    
    let idsC:number[] = []

    this.comService.selectAll().subscribe(
      response2 => { 
        for(let com of response2){
        idsC.push(com.id)
      }
    this.utMap.set("Commercial", idsC)
    }
    )
  }

  getParticipant(){
    
    let idsP:number[] = []

    this.partService.selectAll().subscribe(
      response2 => { 
        for(let com of response2){
          idsP.push(com.id)
      }
    this.utMap.set("Participant", idsP)
    }
    )
  }

  getFormateur(){
    
    let idsF:number[] = []

    this.formService.selectAll().subscribe(
      response2 => { 
        for(let com of response2){
        idsF.push(com.id)
      }
    this.utMap.set("Formateur", idsF)
    }
    )
  }
  getAssitant(){
    
    let idsA:number[] = []

    this.assistService.selectAll().subscribe(
      response2 => { 
        for(let com of response2){
          idsA.push(com.id)
      }
    this.utMap.set("Assistant", idsA)
    }
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

      response=> {this.utilisateur = response

        }
    )

}

delete(id:number)
  {
let utType = ""; 

this.utMap.forEach((value, key) => {

  if(value.some(item => item == id)){utType = key}
}
)

switch(utType){

  case "Commercial":
  this.comService.delete(id).subscribe(
    reponse => this.selectAll())
  break;

  case "Participant":
    this.partService.delete(id).subscribe(
      reponse => this.selectAll())
    break;

    case "Formateur":
    this.formService.delete(id).subscribe(
      reponse => this.selectAll())
    break;

    case "Assistant":
    this.assistService.delete(id).subscribe(
      reponse => this.selectAll())
    break;

    case "":
      this.utService.delete(id).subscribe(
        reponse => this.selectAll())
      break;
}
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
