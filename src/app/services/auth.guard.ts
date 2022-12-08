import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isAuthenticated:boolean=false
  constructor(
    private _service: ServiceService,
    private _router: Router) { 
      this._service.invokelogin.subscribe(res=>{
        if(res==true){
          this.isAuthenticated=true
        }
        else{
          this.isAuthenticated=false
        }
      })
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isAuthenticated==true) {
        this._router.navigate(['/home']);
    }
    return  this.isAuthenticated;
    
  }
  
}
