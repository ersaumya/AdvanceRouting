import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate {

  constructor(private authService:AuthService){}

  canLoad(){
    return this.authService.checkPermision();
  }

  canActivate(){
    return this.authService.isLoggedIn();
  }
  
}
