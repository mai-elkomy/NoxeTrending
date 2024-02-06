import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {ngSkipHydration: 'true'}
})
 
export class NavbarComponent implements OnInit {
  constructor(private _authService: AuthService) {
   
  }
    islogin: boolean = false;
  ngOnInit(): void {
    this._authService.userdata.subscribe
      ({
        next: () => {
          if (this._authService.userdata.getValue() != null) {
            this.islogin = true;
          } else {
            this.islogin = false;
          }
        }
      });
   
  }

  logOut(){
    this._authService.signOut();
    
    }
}
