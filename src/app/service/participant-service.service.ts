import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Participant[]>('http://localhost:8025/api/participants')
  }

  selectById(id:number)
  {
    return this.http.get<Participant>(`http://localhost:8025/api/participants/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/participants/${id}`)
  }

  add(participant:Participant)
  {
    return this.http.post(`http://localhost:8025/api/participants`,participant)
  }

  getByIdFormation(id:number)
  {
    return this.http.get<Participant[]>(`http://localhost:8025/api/participantsparformation/${id}`)
  }
}
