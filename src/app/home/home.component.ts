import { MovieServiseService } from './../movie-servise.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private _MovieServiseService: MovieServiseService) { }
  title: string = '';
  ngOnInit(): void {
    this._MovieServiseService.getTrendingMovie('movie').subscribe({
      next: (resp) => this.MovieTrending = resp.results.slice(0,10)
    });
     this._MovieServiseService.getTrendingMovie('tv').subscribe({
      next: (resp) => this.tvTrending = resp.results.slice(0,10)
     });
     this._MovieServiseService.getTrendingMovie('person').subscribe({
      next: (resp) => this.PeopleTrending = resp.results.filter((item:any)=>item.profile_path !== null).slice(0,10)
     });
  }
  MovieTrending: any[] = [];
  PeopleTrending: any[] = [];
  tvTrending: any[] = [];
 
}
 