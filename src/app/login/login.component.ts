import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  // accessToken:string=''

  constructor(
    private _formbuilder: FormBuilder,
    private _router: Router,
    private _service: ServiceService,
    private _msalService: MsalService
  ) {
    this.loginform = this._formbuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }
  ngOnInit(): void {}

  // login() {
  //   console.log(this.loginform.value);
  //   let user: any = localStorage.getItem('user');
  //   let data = JSON.parse(user);
  //   if (
  //     data.email == this.loginform.value.email &&
  //     data.password == this.loginform.value.password
  //   ) {
  //     this._service.invokelogin.next(true);
  //     this._router.navigate(['home']);
  //   } else {
  //     this._router.navigate(['signup']);
  //   }
  // }

// azure login/logout
  isLogin():boolean{
    return  this._msalService.instance.getActiveAccount() !=null

  }

  azureLogin() {
    this._msalService.loginPopup().subscribe((res:AuthenticationResult)=>{

      console.log("res==>",res)
      // this.accessToken=res.accessToken
      localStorage.setItem('token',res.accessToken)
      this._msalService.instance.setActiveAccount(res.account)
      
      if(res.account){
        this._router.navigate(['home'])
      }
    })
  
  }

  azureLogout() {
    this._msalService.logout();
  }
}
