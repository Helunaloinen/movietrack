import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddPage } from '../add/add';
import { MoviesPage } from '../movies/movies';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = MoviesPage;
  tab3Root = AddPage;

  constructor() {

  }
}
