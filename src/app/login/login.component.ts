import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private _authservice: AuthService, private _router: Router) {
    if (localStorage.getItem("userData") != null) {
      this._authservice.getUser();
       }
     }
  loginForm: FormGroup = new FormGroup({
    moblieNum: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });
  isloading: boolean = false;

  submitform(loginform:FormGroup) {
    this.isloading = true;
    this._authservice.signIn(loginform.value).subscribe({
      next: (response) => {
        if (response.message === "success") {
          this.isloading = false;
      
          localStorage.setItem("userData", response.token);
          this._authservice.getUser();
          
          this._router.navigate(['/home'])
        } else {
           this.isloading = false;
       }
      }
    
    })
  }
    ngOnInit(): void {
    this._authservice.userdata.subscribe
      ({
        next: () => {
          if (this._authservice.userdata.getValue() != null) {
            this._router.navigate(['/home'])
          } else {
             this._router.navigate(['/login'])
          }
        }
      });
   
  }
}
