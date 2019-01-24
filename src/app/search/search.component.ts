import { Component, OnInit } from '@angular/core';
import { ApiService, Movie, SearchResult } from './../api.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading = false;
  searchTitle :string;
  type :string = 'all';
  errorMessage="";
  results : Array<Movie>;


  constructor( public api:ApiService ) { }

  ngOnInit() {
  }

  searchPress() {
    this.loading=true;
    /** Make the call to the Movies API **/
    this.api.searchMovie( this.searchTitle, this.type ).subscribe( 
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
