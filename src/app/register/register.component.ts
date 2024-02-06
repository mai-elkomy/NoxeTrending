import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  host: {ngSkipHydration: 'true'}
})
export class RegisterComponent  {
    constructor(private _authservice:AuthService,private _router:Router){}
  registerForm: FormGroup = new FormGroup({
    gender: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    dateOfBirth: new FormGroup({
      day: new FormControl(null, Validators.required),
      month: new FormControl(null, Validators.required),
      year: new FormControl(null, Validators.required)
    }),
    emailAdress: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
    // confirmPassword:new FormControl(null,[Validators.required]),
    moblieNum: new FormControl(null, [Validators.required, Validators.minLength(11)])

  });
    
  isloading:boolean =false;
  error: string = '';
  submitform(registerForm: FormGroup) {
    this.isloading = true;
    console.log(registerForm)
    this._authservice.signUp(registerForm.value).subscribe({
      next: (response) => {
        if (response.message === 'success') {
          this.isloading = false;
         this._router.navigate(['/login'])
        }
        else {
          this.isloading = false;
          this.error = response;
          
        }
      }
    })
   
}
  daylist: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
 monthlist: number[]= [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]
   yearlist:number[]= [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
  ]


}

