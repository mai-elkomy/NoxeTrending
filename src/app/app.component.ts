import { NgFor, NgIf } from '@angular/common';
import { User } from './user';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'NoStandaloneApp';
  user: User[]= [
    { name: "ahmed", age: 23 },
    { name: "Aya", age: 24 },
    { name: "Omar", age: 20 }
  ]

  ChangeTheme() {
    this.checkTheme = !this.checkTheme;

  }
  DarkMode: string = "Dark Mode";
  checkTheme:boolean=false
  lightTheme:string ='background-color: white;color: black';
  darkTheme:string='background-color: black;color: white'
    
};
 
