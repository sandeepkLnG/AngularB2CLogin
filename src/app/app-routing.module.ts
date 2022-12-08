import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
 {
  path:'signup',component:SignupComponent
 },
 {
  path:'login',component:LoginComponent
 },
 {
  path:'home',component:HomeComponent,
  canActivate:[MsalGuard]
  // canActivate: [AuthGuard],
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
