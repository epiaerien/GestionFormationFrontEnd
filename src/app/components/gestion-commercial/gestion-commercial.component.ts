import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Commercial } from 'src/app/models/commercial';

import { CommercialServiceService } from 'src/app/service/commercial-service.service';

@Component({
  selector: 'app-gestion-commercial',
  templateUrl: './gestion-commercial.component.html',
  styleUrls: ['./gestion-commercial.component.css']
})
export class GestionCommercialComponent implements OnInit {

  commercials! : Commercial[];

  commercial! : Commercial;

  

  constructor(private cservice:CommercialServiceService, private route:ActivatedRoute)
  {
    
  }

ngOnInit():void{
  this.selectAll()
  this.commercial = new Commercial()
}


selectAll()
{
  this.cservice.selectAll().subscribe(response=>
    {
      console.log(response.length)
      this.commercials=response
    })
}


addCommercial(f:NgForm)
{
  console.log(this.commercial.dateNaissance)
  this.cservice.add(this.commercial).subscribe(response=>
    {
      
      this.selectAll()
      f.resetForm();
    })
}

supprimerCommercial(id:number)
{
  this.cservice.delete(id).subscribe(response=>
    {this.selectAll()})
}

modifier(id:number)
  {
    this.cservice.selectById(id).subscribe(

      response=> this.commercial = response
    )

}

}
