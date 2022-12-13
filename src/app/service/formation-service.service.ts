import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Formation[]>('http://localhost:8025/api/formations')
  }

  selectById(id:number)
  {
    return this.http.get<Formation>(`http://localhost:8025/api/formations/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/formations/${id}`)
  }

  add(formation:Formation)
  {
    return this.http.post(`http://localhost:8025/api/formations`,formation)
  }
}
