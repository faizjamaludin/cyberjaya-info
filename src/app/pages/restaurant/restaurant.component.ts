import { Component, OnInit } from '@angular/core';
import {
  faLocationDot,
  faMobileRetro,
  faEnvelope,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [DatePipe], // Add DatePipe as a provider
})
export class RestaurantComponent implements OnInit {
  // declare icons

  faLocationDot = faLocationDot;
  faMobileRetro = faMobileRetro;
  faEnvelope = faEnvelope;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  regStar = Star;

  // iniatializer
  id: string | null = '';
  listings: any;
  openingHours: any;
  from: string | null = '';
  to: string | null = "";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }



  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    const url = 'http://localhost:3001/listing/list/' + this.id;

    this.http.get(url).subscribe((response: any) => {
      // this.listings = [response.listing];
      this.listings = response.listing;

      this.openingHours = Object.keys(this.listings.list_openingHour)
      console.log(this.openingHours)

      console.log(this.capitalizeWords((this.listings).toString()))
    });
  }

  // change date format to proper date format
  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }

  capitalizeWords = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
}



