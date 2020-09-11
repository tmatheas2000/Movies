import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  Movies: any = [];
  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;

  constructor(public restApi: RestApiService) { 
    this.apiResponse=[];
  }

  ngOnInit(): void {
    this.restApi.getAllMovies().subscribe((data: {}) => {
      this.apiResponse = data;
      this.Movies = data;
    });
  }

}
