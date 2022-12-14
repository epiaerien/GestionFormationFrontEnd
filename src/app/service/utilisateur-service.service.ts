import { Injectable } from '@angular/core';
import { Utilisateurs } from '../models/utilisateurs';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/role';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  constructor(private http:HttpClient) { }

  selectAll()
  { 
    return this.http.get<Utilisateurs[]>('http://localhost:8025/api/utilisateurs')
  }

  selectById(id:number)
  {
    return this.http.get<Utilisateurs>(`http://localhost:8025/api/utilisateurs/${id}`)
  }

  delete(id:number)
  {
    return this.http.delete(`http://localhost:8025/api/utilisateurs/${id}`)
  }

  add(utilisateurs:Utilisateurs)
  {
    return this.http.post(`http://localhost:8025/api/utilisateurs`,utilisateurs)
  }
  
  selectAllRoles()
{
  return this.http.get<Role[]>('http://localhost:8025/api/roles')
}

selectRoleById(id:number)
{
  return this.http.get<Role>(`http://localhost:8025/api/roles/${id}`)
}




}
