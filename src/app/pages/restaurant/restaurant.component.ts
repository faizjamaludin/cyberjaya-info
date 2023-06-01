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

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
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
  listings: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    const url = 'http://localhost:3001/listing/list/' + this.id;

    this.http.get(url).subscribe((response: any) => {
      this.listings = [response.listing];
      console.log(this.listings);
    })

  }

}
