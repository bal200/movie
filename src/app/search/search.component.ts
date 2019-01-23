import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

interface Movie {
  Title: string,
  Year: string,
  imdbID: string,
  Poster: string /* a url to the jpg image */
}

interface SearchResult {
  Search: Array<Movie>,
  totalResults: string,
  Response: string
}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading = false;
  searchTitle :string;
  errorMessage="";
  results : Array<Movie>;


  constructor( public api:ApiService ) { }

  ngOnInit() {
  }

  searchPress() {
    this.loading=true;
    /** Make the call to the Movies API **/
    this.api.searchMovie( this.searchTitle, "" ).subscribe( 
      (res:SearchResult) => {
        this.results = res.Search;
        this.loading=false;
      },error => {
        this.errorMessage = error;
        this.loading=false;
      }
    );
  }

}
