import { Component, OnInit } from '@angular/core';
import { ApiService, Movie, SearchResult } from './../api.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

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
  totalResults=0;
  page=1;
  showPrev=false; showNext=false;

  constructor( public api:ApiService ) { }

  ngOnInit() { }

  searchPress() {
    this.page=1;
    this.doSearch();
  }

  doSearch() {
    this.loading=true;
    /** Make the call to the Movies API **/
    this.api.searchMovie( this.searchTitle, this.type, this.page ).subscribe( 
      (res:SearchResult) => {
        this.results = res.Search;
        this.totalResults = toInteger(res.totalResults);
        this.loading=false;
        this.calcPagination();
      },error => {
        this.errorMessage = error;
        this.loading=false;
      }
    );
  }

  calcPagination() {
    const pageSize = 10;
    let count = Math.ceil(this.totalResults / pageSize);

    if (this.page==1) this.showPrev=false; else this.showPrev=true;
    if (this.page == count) this.showNext = false; else this.showNext=true;
  }

  nextPage() {
    this.page++;
    this.doSearch();
  }
  prevPage() {
    this.page--;
    this.doSearch();
  }

}
