import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

const imgUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

@Component({
  selector: 'app-movie',
  template: `
    <mat-card style="min-width: 300px; margin:1rem">
    <mat-card-header>
      <mat-card-title>
        <h1>{{movie.title}}</h1>
      </mat-card-title>
    </mat-card-header>
    <img mat-card-image [src]="getImage(movie) ?? 'https://wallpapers.ispazio.net/wp-content/uploads/2021/02/netflix-400x866.jpg'" alt="movie" style="background-size: cover; max-height:480px">
    <mat-card-content>
      <p>
        {{movie.overview.slice(1,100)}} ...ver mas
      </p>
    </mat-card-content>
    </mat-card>
  `,
})
export class MovieComponent {
  @Input() movie!: Movie;

  public getImage(movie: Movie) {
    return movie.backdrop_path ? imgUrl + movie.backdrop_path : null
  }
}
