import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { Utilisateurs } from '../models/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private route: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    if (!sessionStorage.getItem("userDetails")) {

      this.route.navigateByUrl('login')
      return false

    }
    else {
      let sessionUser = sessionStorage.getItem("userDetails");
      let valid: boolean = false;
      const user = sessionUser !== null ? JSON.parse(sessionUser) : new Utilisateurs()

      if (route.data['role']) {
        if (route.data['role'] === user.role.nom) {
          valid = true;
        }
      }else
      {
        return true;
      }
      return valid;

    }

  }




}