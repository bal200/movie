import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SeriesComponent } from './series/series.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
