import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, map } from 'rxjs';



import { Movie, MovieResponse } from '../models/movie.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getMovies(page = 1): Observable<Movie[]> {
    const URL = environment.API.replace('{api}', 'discover');

    return this.http.get<MovieResponse>(`${URL}&page=${page}`)
      .pipe(map(response => response.results))
  }


  public getMoviesBySearch(page = 1, query = ''): Observable<Movie[]> {
    const URL = environment.API.replace('{api}', 'search');
    
    return this.http.get<MovieResponse>(`${URL}&page=${page}&query=${query}`)
      .pipe(map(response => response.results))
  }
}
