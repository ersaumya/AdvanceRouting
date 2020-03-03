import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Mail } from "../../models/mail.interface";
import { MailService } from "../../mail.service";
import { Observable } from "rxjs";

@Injectable()
export class MailViewResolve implements Resolve<Mail> {

  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Mail> {
    let id = route.paramMap.get("id");
    return this.mailService.getMessage(id);
  }
}
