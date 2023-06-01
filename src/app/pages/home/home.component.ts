import { Component, OnInit } from '@angular/core';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Cyberjaya Info';

  // Icons
  faStar = faStar;
  searchIcon = faMagnifyingGlass

  // variables
  listings: any[] = [];

  search = {
    searchInput: '',
  };

  constructor(public location: Location, private http: HttpClient) { }

  ngOnInit(): void {

    const url = 'http://localhost:3001/listing/alllist';

    this.http.get(url).subscribe((response: any) => {
      this.listings = response;

      console.log(this.listings)
    })
  }

  onSubmit() {

  }
}
