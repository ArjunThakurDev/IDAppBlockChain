import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {UserdataService} from './userdata.service';
import {HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app.Routing.module';

import { HttpModule } from '@angular/http';
import { UserauthdashComponent } from './userauthdash/userauthdash.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserprofileComponent,
    UserauthdashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
