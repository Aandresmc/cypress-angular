import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []
  currentPage = 1;

  form = new FormGroup({
    query: new FormControl(''),
  });

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.AllMovies();
  }

  navigation(back = false, query = '') {
    back ? this.currentPage-- : this.currentPage++;
    query ? this.search(query) : this.AllMovies();
  }

  AllMovies() {
    this.service.getMovies(this.currentPage).subscribe(m => this.movies = m);
  }

  search(query: string) {
    this.service.getMoviesBySearch(this.currentPage, query).subscribe(m => this.movies = m);
  }

}
