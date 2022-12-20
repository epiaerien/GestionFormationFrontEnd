import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diplome } from '../models/diplome';

@Injectable({
  providedIn: 'root'
})
export class DiplomeServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Diplome[]>('http://localhost:8025/api/diplomes')
  }

  selectById(id:number)
  {
    return this.http.get<Diplome>(`http://localhost:8025/api/diplomes/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/diplomes/${id}`)
  }

  add(diplome:Diplome)
  {
    return this.http.post(`http://localhost:8025/api/diplomes`,diplome)
  }

  getAllByIdPart(id:number)
  {
    return this.http.get<Diplome[]>(`http://localhost:8025/api/diplomesbyPartId/${id}`)
  }

  getAllByIdForm(id:number)
  {
    return this.http.get<Diplome[]>(`http://localhost:8025/api/diplomesbyFormId/${id}`)
  }
}
