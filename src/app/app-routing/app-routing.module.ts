import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SearchComponent } from '../search/search.component';
import { MovieComponent } from '../movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
