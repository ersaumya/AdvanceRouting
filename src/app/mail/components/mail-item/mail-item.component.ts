import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: "app-mail-item",
  templateUrl: "./mail-item.component.html",
  styleUrls: ["./mail-item.component.scss"]
})
export class MailItemComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {}

  @Input() message: Mail;

 /*  navigateToMessage(){
    this.router.navigate(
        ["", { outlets: { pane: ["message", this.message.id] } }]
      );
  } */
}
