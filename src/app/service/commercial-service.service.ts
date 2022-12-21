import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from '../models/commercial';

@Injectable({
  providedIn: 'root'
})
export class CommercialServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Commercial[]>('http://localhost:8025/api/commercials')
  }

  selectById(id:number)
  {
    return this.http.get<Commercial>(`http://localhost:8025/api/commercials/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/commercials/${id}`)
  }

  add(commercial:Commercial)
  {
    return this.http.post(`http://localhost:8025/api/commercials`,commercial)
  }

  commercialparid(id:number)
  {
    return this.http.get<Commercial>(`http://localhost:8025/api/commercials/${id}`)
  } 

  commercialparappel(id:number)
  {
    return this.http.get<Commercial>(`http://localhost:8025/api/commercialparappel/${id}`)
  }

  commercialparrdv(id:number)
  {
    return this.http.get<Commercial>(`http://localhost:8025/api/commercialparrdv/${id}`)
 
  }
}
