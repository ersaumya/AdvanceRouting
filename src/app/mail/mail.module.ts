import { MailViewGuard } from './components/mail-view/mail-view.guard';
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
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    MailFolderComponent,
    MailItemComponent,
    MailAppComponent,
    MailViewComponent
  ],
  exports: [MailAppComponent],
  imports: [CommonModule, FormsModule,AuthModule, MailRoutingModule],
  providers: [MailService, MailFolderResolve, MailViewResolve,MailViewGuard]
})
export class MailModule {}
