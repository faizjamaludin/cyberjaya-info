import { Component } from '@angular/core';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Cyberjaya Info';
  path: any;

  //location path
  constructor(public location: Location, private router: Router) {
    this.path = location.path();
    // console.log(this.path)
  }

  // Icons
  faStar = faStar;
  searchIcon = faMagnifyingGlass

  search = {
    searchInput: '',
  };

  isDashboardRoute() {
    return this.router.url.indexOf('/dashboard') !== -1;
  }

  onSubmit() {

  }
}
