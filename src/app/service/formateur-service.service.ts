import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from '../models/formateur';


@Injectable({
  providedIn: 'root'
})
export class FormateurServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Formateur[]>('http://localhost:8025/api/formateurs')
  }

  selectById(id:number)
  {
    return this.http.get<Formateur>(`http://localhost:8025/api/formateurs/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/formateurs/${id}`)
  }

  add(formateurs:Formateur)
  {
    return this.http.post(`http://localhost:8025/api/formateurs`,formateurs)
  }


  remove(formateurs:Formateur)
  {
    return this.http.put('http://localhost:8015/api/formateurs', formateurs);
  }


  formateurparid(id:number)
  {
    return this.http.get<Formateur>(`http://localhost:8025/api/formateurs/${id}`)
  }

}
