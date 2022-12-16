import { Component, Input, OnChanges, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurServiceService } from 'src/app/service/formateur-service.service';
import { FormationServiceService } from 'src/app/service/formation-service.service';

@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})


export class GestionFormationComponent implements OnInit {


  @Input() formation!: Formation

  @Output() newItemEvent = new EventEmitter<string>();

  formations!: Formation[]

  idFormateur!: number
  formateur!: Formateur
  formateurs!: Formateur[]
  

  constructor(private formService: FormationServiceService, private formateurService: FormateurServiceService) { }
  

  ngOnInit(): void {

    this.afficherAll()
    this.selectAllFormateur()
  }



  add(f: NgForm) {

    this.formateurService.selectById(this.idFormateur).subscribe(
      response => {
        this.formation.formateur = response
        

        this.formService.add(this.formation).subscribe(
          response2 => { console.log(response.formations)
          f.resetForm()
        
          this.newItemEvent.emit("refresh")}
        );
        
      }
    )
    

    
  }

  afficherAll() {
    this.formService.selectAll().subscribe(
      Response => {
        this.formations = Response
        for (let f of this.formations) {
          this.formService.chercherParFormation(f.id).subscribe(Response2 => {
            f.formateur = Response2
          }
          )


        }
      })
  }


  selectAllFormateur() {

    this.formateurService.selectAll().subscribe(
      response => {
        this.formateurs = response
      }
    )

  }





}
