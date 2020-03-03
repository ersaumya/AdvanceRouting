import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../../models/mail.interface';
import { pluck } from 'rxjs/operators';

@Component({
  selector: "app-mail-view",
  templateUrl: "./mail-view.component.html",
  styleUrls: ["./mail-view.component.css"]
})
export class MailViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  message: Observable<Mail> = this.route.data.pipe(pluck("message"));
  ngOnInit(): void {}
}
