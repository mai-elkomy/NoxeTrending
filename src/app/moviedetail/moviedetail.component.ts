import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieServiseService } from '../movie-servise.service';
import { MoviesInter } from '../movies-inter';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.css'
})
export class MoviedetailComponent implements OnInit{
 
  constructor(private _ActivatedRoute: ActivatedRoute, private _MovieServiseService: MovieServiseService) { }
  itemdetails: any;
  similar: any[] = []
  mediaType:string=''
  ngOnInit(): void {
 
    let { id, media_type } = this._ActivatedRoute.snapshot.params;
    this.mediaType = media_type;
    this._MovieServiseService.getMovieDetails(id, media_type).subscribe({
      next: (res) => this.itemdetails = res

    });
    this._MovieServiseService.getSimilar(id, media_type).subscribe({
      next: (res) => this.similar = res.results.slice(0,10)
    });
    
  }
  getSimilar(id:string,mediatype:string) {
     this._MovieServiseService.getMovieDetails(id, mediatype).subscribe({
      next: (res) => this.itemdetails = res

     });
     this._MovieServiseService.getSimilar(id, mediatype).subscribe({
       next:(res)=>this.similar=res.results.slice(0,10)
     })
  }

}
