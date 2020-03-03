import { MailService } from './mail.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MailFolderComponent } from './container/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailRoutingModule } from './mail-routing.module';
import { MailFolderResolve } from './container/mail-folder/mail-folder.resolve';
import { MailViewComponent } from './components/mail-view/mail-view.component';



@NgModule({
  declarations: [MailFolderComponent, MailItemComponent, MailAppComponent, MailViewComponent],
  exports: [MailAppComponent],
  imports: [CommonModule, FormsModule, MailRoutingModule],
  providers: [MailService, MailFolderResolve]
})
export class MailModule {}
