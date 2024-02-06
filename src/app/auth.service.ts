import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
 
 
  constructor(private _HttpClient: HttpClient, private _router: Router) {
    
   
    }
  
 
   userdata: any = new BehaviorSubject(null);
    getUser() {
    let user =JSON.stringify( localStorage.getItem("userData"));
    let decodedUser = jwtDecode(user);
    this.userdata.next(decodedUser) ;
    console.log(this.userdata)
  }
  signUp(userdata:object):Observable<any> {
    return this._HttpClient.post('http://localhost:5000/users/register',userdata)
  }
  signIn(userdata:object):Observable<any> {
    return this._HttpClient.post('http://localhost:5000/users/login',userdata)
  }
  signOut() {
    localStorage.removeItem("userData");
    this.userdata.next(null);
    this._router.navigate(['/login']);
  }
}
