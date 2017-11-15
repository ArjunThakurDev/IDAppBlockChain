
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserauthdashComponent } from './userauthdash/userauthdash.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '', },
    { path: 'UserAuthKeyDash', pathMatch: 'full', component: UserauthdashComponent },

    { path: 'login', pathMatch: 'full', component: LoginComponent },
    { path: 'userinfo', pathMatch: 'full', component: UserprofileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }