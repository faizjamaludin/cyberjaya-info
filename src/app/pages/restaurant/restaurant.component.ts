import { Component } from '@angular/core';
import {
  faLocationDot,
  faMobileRetro,
  faEnvelope,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent {
  // declare icons

  faLocationDot = faLocationDot;
  faMobileRetro = faMobileRetro;
  faEnvelope = faEnvelope;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  regStar = Star;
}
