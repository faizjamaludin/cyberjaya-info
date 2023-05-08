import { Component } from '@angular/core';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = 'Cyberjaya Info';

  // Icons
  faStar = faStar;
  searchIcon = faMagnifyingGlass

  search = {
    searchInput: '',
  };

  constructor(public location: Location) { }

  onSubmit() {

  }
}
