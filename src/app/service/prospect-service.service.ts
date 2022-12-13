import { Injectable } from '@angular/core';
import { Prospect } from '../models/prospect';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProspectServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Prospect[]>('http://localhost:8025/api/prospects')
  }

  selectById(id:number)
  {
    return this.http.get<Prospect>(`http://localhost:8025/api/prospects/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/prospects/${id}`)
  }

  add(prospects:Prospect)
  {
    return this.http.post(`http://localhost:8025/api/prospects`,prospects)
  }
}
