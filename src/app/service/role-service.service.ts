import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Role[]>('http://localhost:8025/api/roles')
  }

  selectById(id:number)
  {
    return this.http.get<Role>(`http://localhost:8025/api/roles/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/roles/${id}`)
  }

  add(role:Role)
  {
    return this.http.post(`http://localhost:8025/api/roles`,role)
  }
}

