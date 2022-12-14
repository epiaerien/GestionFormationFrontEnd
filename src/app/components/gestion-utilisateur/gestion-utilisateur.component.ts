import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { ActivatedRoute, createUrlTreeFromSnapshot, Router } from '@angular/router';
import { variationPlacements } from '@popperjs/core';
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
export class GestionUtilisateurComponent implements OnInit {


  utilisateurs!: Utilisateurs[]

  utilisateur!: Utilisateurs

  commercials!: Commercial[]

  participants!: Participant[]

  formateurs!: Formateur[]

  assistants!: Assistant[]


  idRole!: number
  roles!: Role[];

  utMap = new Map<string, number[]>([
    ["Commercial", []],
    ["Participant", []],
    ["Formateur", []],
    ["Assistant", []]

  ]);


  constructor(private utService: UtilisateurServiceService,
    private comService: CommercialServiceService,
    private partService: ParticipantServiceService,
    private formService: FormateurServiceService,
    private assistService: AssistantServiceService,
    private route: ActivatedRoute) { }


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


  selectAll() {

    this.utService.selectAll().subscribe(
      response => {
        this.utilisateurs = response


      })
  }

  getCommercials() {

    let idsC: number[] = []

    this.comService.selectAll().subscribe(
      response2 => {
        for (let com of response2) {
          idsC.push(com.id)
        }
        this.utMap.set("Commercial", idsC)
      }
    )
  }

  getParticipant() {

    let idsP: number[] = []

    this.partService.selectAll().subscribe(
      response2 => {
        for (let com of response2) {
          idsP.push(com.id)
        }
        this.utMap.set("Participant", idsP)
      }
    )
  }

  getFormateur() {

    let idsF: number[] = []

    this.formService.selectAll().subscribe(
      response2 => {
        for (let com of response2) {
          idsF.push(com.id)
        }
        this.utMap.set("Formateur", idsF)
      }
    )
  }
  getAssitant() {

    let idsA: number[] = []

    this.assistService.selectAll().subscribe(
      response2 => {
        for (let com of response2) {
          idsA.push(com.id)
        }
        this.utMap.set("Assistant", idsA)
      }
    )
  }

  getStatut(id: number): string {

    let utType = "Utilisateur";

    this.utMap.forEach((value, key) => {

      if (value.some(item => item == id)) { utType = key }
    }
    )
    return utType
  }

  add(f: NgForm) {
    console.log(this.idRole)
    this.utService.selectRoleById(this.idRole).subscribe(
      response2 => {
        console.log(" sdfds " + response2)
        this.utilisateur.role = response2

        this.utService.add(this.utilisateur).subscribe(

          response => {
            this.selectAll();

            f.resetForm();
          }

        )
      }
    )

  }

  modifier(id: number, role?: Role) {
    

    if ( role != null && role != undefined) {
      
      let idR = role.id
      
      this.utService.selectRoleById(idR).subscribe(

        responseR => {

          this.utService.selectById(id).subscribe(

            response => {

              this.utilisateur.role = responseR
              this.utilisateur = response
              console.log(this.utilisateur.role)



            }
          )
        }
      )

    }
    else {
      this.utService.selectById(id).subscribe(

        response => {


          this.utilisateur = response

        }
      )

    }

  }

  delete(id: number) {
    let utType = "Utilisateur";

    this.utMap.forEach((value, key) => {

      if (value.some(item => item == id)) { utType = key }
    }
    )

    switch (utType) {

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



  selectAllRoles() {
    this.utService.selectAllRoles().subscribe(
      response => {

        this.roles = response


      }
    )
  }

  addAllUser(f: NgForm) {
    
    let utType = "Utilisateur";

    this.utMap.forEach((value, key) => {

      if (value.some(item => item == this.utilisateur.id)) { utType = key }
    }
    )

    switch (utType) {

      case "Commercial":
        this.utService.selectRoleById(this.idRole).subscribe(
          response2 => {
            console.log(" sdfds " + response2)

            let Com = this.utilisateur as Commercial

            this.utilisateur.role = response2
    
            this.comService.add(Com).subscribe(
    
              response => {
                this.selectAll();
    
                f.resetForm();
              }
    
            )
          }
        )
        break;

      case "Participant":
        this.utService.selectRoleById(this.idRole).subscribe(
          response2 => {
            

            let Com = this.utilisateur as Participant

            this.utilisateur.role = response2
            console.log(Com.transactions)
            this.partService.add(Com).subscribe(
    
              response => {
                this.selectAll();
    
                f.resetForm();
              }
    
            )
          }
        )
        break;

      case "Formateur":
        this.utService.selectRoleById(this.idRole).subscribe(
          response2 => {
            

            let Com = this.utilisateur as Formateur

            this.utilisateur.role = response2
    
            this.formService.add(Com).subscribe(
    
              response => {
                this.selectAll();
    
                f.resetForm();
              }
    
            )
          }
        )
        break;

      case "Assistant":
        this.utService.selectRoleById(this.idRole).subscribe(
          response2 => {
            

            let Com = this.utilisateur as Assistant

            this.utilisateur.role = response2
    
            this.assistService.add(Com).subscribe(
    
              response => {
                this.selectAll();
    
                f.resetForm();
              }
    
            )
          }
        )
        break;

      case "Utilisateur":
        this.utService.selectRoleById(this.idRole).subscribe(
          response2 => {

            this.utilisateur.role = response2
    
            this.utService.add(this.utilisateur).subscribe(
    
              response => {
                this.selectAll();
    
                f.resetForm();
              }
    
            )
          }
        )
        break;
    }
    
   

  }


}
