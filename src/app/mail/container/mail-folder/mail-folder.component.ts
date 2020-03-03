import { MailService } from './../../mail.service';
import { Component, OnInit } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: "app-mail-folder",
  templateUrl: "./mail-folder.component.html",
  styleUrls: ["./mail-folder.component.scss"]
})
export class MailFolderComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  messages: Observable<Mail[]> = this.route.data.pipe(pluck("messages"));
  title: Observable<string> = this.route.params.pipe(pluck("name"));
  ngOnInit(): void {}
}
