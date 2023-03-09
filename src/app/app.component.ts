import { Component } from '@angular/core';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Cyberjaya Info';

  // Icons
  faStar = faStar;
  searchIcon = faMagnifyingGlass

  search = {
    searchInput: '',
  };

  onSubmit() {

  }
}
