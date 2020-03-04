import { MailModule } from './mail/mail.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, CustomPreload } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MailModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomPreload],
  bootstrap: [AppComponent]
})
export class AppModule { }
