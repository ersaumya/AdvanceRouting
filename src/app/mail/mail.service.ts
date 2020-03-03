import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './models/mail.interface';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class MailService {
  //private MESSAGE_API: string = "http://localhost:3000/messages";
  constructor(private httpClient: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.httpClient
      .get<Mail[]>(`http://localhost:3000/messages?folder=${folder}`)
      .pipe(tap(response => console.log(response)));
  }
}
