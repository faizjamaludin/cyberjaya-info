import { Component, OnInit } from '@angular/core';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ListingDataService } from 'src/app/services/listing/listing-data.service';
import { ActivatedRoute } from '@angular/router';

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
  id: string | null = '';

  search = {
    searchInput: '',
  };

  constructor(
    public location: Location,
    private http: HttpClient,
    private listingData: ListingDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.getListingData();
    console.log(this.listings);

  }

  getListingData(): void {
    this.listingData.getAllData().subscribe((data: any) => {
      this.listings = data;

    })
  }


  onSubmit() {

  }
}
