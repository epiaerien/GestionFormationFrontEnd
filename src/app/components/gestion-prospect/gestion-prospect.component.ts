import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prospect } from 'src/app/models/prospect';
import { ProspectServiceService } from 'src/app/service/prospect-service.service';

@Component({
  selector: 'app-gestion-prospect',
  templateUrl: './gestion-prospect.component.html',
  styleUrls: ['./gestion-prospect.component.css']
})
export class GestionProspectComponent implements OnInit {
prospect!: Prospect; 
prospects!:Prospect[]; 


constructor(private pservice:ProspectServiceService){

}
  ngOnInit(): void {
    this.prospect=new Prospect(); 
    this.selectAll()
  }

  selectAll()
{
  this.pservice.selectAll().subscribe(response=>
    {
      console.log(response.length)
      this.prospects=response
    })

}
addprospect(f:NgForm)
{

  this.pservice.add(this.prospect).subscribe(response=>
    {
      
      this.selectAll()
      f.resetForm()

    })
}

supprimerprospect (id:number)
{
  this.pservice.delete(id).subscribe(response=>
    {this.selectAll()})
}

modifierprospect (id:number)
{
  this.pservice.selectById(id).subscribe(

    response=> this.prospect = response)
}
}
