import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  public invokelogin: Subject<any> = new Subject();


  constructor(
    private http: HttpClient
  ) {}

  postService(url:string, data:any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' , 
      
      // "token":"xx.yy.zz"
    
    })
    };
    return this.http.post(url , data, options);
  }
}
