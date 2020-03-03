import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mail-app',
  templateUrl: './mail-app.component.html',
  styleUrls: ['./mail-app.component.scss']
})
export class MailAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event){
    console.log('Activate:',event);
  }
  onDeactivate(event){
    console.log('Deactivate:',event);
  }

}
