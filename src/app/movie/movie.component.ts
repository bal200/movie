import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Movie, MovieFull } from './../api.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() id: string;

  loading = false;
  errorMessage="";
  movie : MovieFull;

  constructor( public api:ApiService, public activeRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.loading=true;
      this.id = routeParams.id;
      /** Make the call to the Movies API **/
      this.api.getMovie( this.id ).subscribe( 
        (movie:MovieFull) => {
          this.movie = movie;
          this.loading=false;
        },error => {
          this.errorMessage = error;
          this.loading=false;
        }
      );

    });

  }

}
