import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiseService {

  constructor(private _HttpClient: HttpClient) { 
  }
  getTrendingMovie(movieType:string): Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${movieType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)

  }
  //
   getSimilar(id:string,media_type:string): Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50`)

  }
   getMovieDetails(id:string,media_type:string): Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)

  }

}
