import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RendezVous } from '../models/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<RendezVous[]>('http://localhost:8025/api/rendezvous')
  }

  selectById(id:number)
  {
    return this.http.get<RendezVous>(`http://localhost:8025/api/rendezvous/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/rendezvous/${id}`)
  }

  add(rendezVous:RendezVous)
  {
    return this.http.post(`http://localhost:8025/api/rendezvous`,rendezVous)
  }
}
