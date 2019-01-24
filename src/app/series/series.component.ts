import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, MovieFull } from './../api.service';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

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
