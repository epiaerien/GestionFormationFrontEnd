import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assistant } from '../models/assistant';

@Injectable({
  providedIn: 'root'
})
export class AssistantServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Assistant[]>('http://localhost:8025/api/assistants')
  }

  selectById(id:number)
  {
    return this.http.get<Assistant>(`http://localhost:8025/api/assistants/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/assistants/${id}`)
  }

  add(assistant:Assistant)
  {
    return this.http.post(`http://localhost:8025/api/assistants`,assistant)
  }
  
}
