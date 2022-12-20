import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';
import { Role } from '../models/role';
import { Utilisateurs } from '../models/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  utilisateur!: Utilisateurs

  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
    
  }

  auth(req:AuthRequest){

    return this.http.post<AuthResponse>('http://localhost:8025/api/loginUserJwt', req)
  }

  findByUsername(username:string)
  {
    return this.http.get<Utilisateurs>(`http://localhost:8025/api/utilisateur/${username}`);
  }

  getRole(username:string)

  {
    return this.http.get<Role>(`http://localhost:8025/api/utilisateurRole/${username}`);
  }

  getUser():Utilisateurs
  
  
  {
    
    if(sessionStorage.getItem("userDetails")){
       this.utilisateur = JSON.parse(sessionStorage.getItem("userDetails") ?? "")
     }
 
     return this.utilisateur
   }

}
