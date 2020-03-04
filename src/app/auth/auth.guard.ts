import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, CanActivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate,CanActivateChild {

  constructor(private authService:AuthService){}

  canLoad(){
    return this.authService.checkPermision();
  }

  canActivate(){
    return this.authService.isLoggedIn();
  }

  canActivateChild(){
    return this.authService.isLoggedInChild();
  }
  
}
