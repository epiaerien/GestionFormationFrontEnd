import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appel } from '../models/appel';

@Injectable({
  providedIn: 'root'
})
export class AppelServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Appel[]>('http://localhost:8025/api/appels')
  }

  selectById(id:number)
  {
    return this.http.get<Appel>(`http://localhost:8025/api/appels/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/appels/${id}`)
  }

  add(appels:Appel)
  {
    return this.http.post(`http://localhost:8025/api/appels`,appels)
  }

  appelparcommercial(id:number){
    return this.http.get<Appel[]>(`http://localhost:8025/api/appelparcommercial/${id}`)
  }

  appelparprospect(id:number)
  {
    return this.http.get<Appel[]>(`http://localhost:8025/api/appelparprospect/${id}`)
  }
}
