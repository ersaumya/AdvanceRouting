import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  user={isAdmin:true};

  checkPermision(){
    return of(this.user.isAdmin);
  }
  isLoggedIn(){
    return of(true);
  }

  isLoggedInChild(){
    return of(true);
  }
}
