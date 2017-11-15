import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {UserdataService} from './userdata.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserdataService,HttpClient,HttpHeaders],
  bootstrap: [AppComponent]
})
export class AppModule { }
