import { Component, OnInit } from '@angular/core';
import { faStar as Star } from '@fortawesome/free-regular-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../../services/auth/user/user-auth.service';
import { ListingDataService } from 'src/app/services/listing/listing-data.service';
import { CommentDataService } from 'src/app/services/comment/comment-data.service';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';
import { from } from 'rxjs';

import {
  faLocationDot,
  faMobileRetro,
  faEnvelope,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { UserDataService } from 'src/app/services/user/user-data.service';

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
  pricingItems: any;
  menuItems: any;
  from: string | null = '';
  to: string | null = '';
  listingId: string | null = '';
  userId: string | null = '';
  userName: string | null = '';
  comments: any[] = [];

  // token initializer
  token: any;

  //formData
  formData = {
    listingId: '',
    userId: '',
    comment: '',
  };

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private userAuthService: UserAuthService,
    private listingData: ListingDataService,
    private http: HttpClient,
    private userData: UserDataService,
    private commentData: CommentDataService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listingData.getData(this.id).subscribe(
      (data: any) => {
        this.listings = data.listing;
        this.setOpeningHour(this.listings);
        this.setPricingItem(this.listings);
        this.getCommentData(data._id);

        this.setListingId(data);
        this.setUserId();

        console.log(data.listing.list_pricing.length);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  async getCommentData(id: any) {
    try {
      const data: any = await this.commentData
        .getListingCommentId(id)
        .toPromise();

      console.log(data);

      for (let x = 0; x < data.length; x++) {
        const user = await this.getUser(data[x].userId);
        const date = await this.formatDate(data[x].date);

        this.comments.push({
          comment: data[x].comment,
          user: user,
          date: date,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  setOpeningHour(data: any) {
    this.openingHours = Object.keys(data.list_openingHour);
  }

  setPricingItem(data: any) {
    data.list_pricing.map((item: any, key: any) => {
      console.log(item);
    });

    this.pricingItems = Object.keys(data.list_pricing[0].list_category);
    this.setMenuItem(data, this.pricingItems);
  }

  setMenuItem(data: any, dataItem: any) {
    this.menuItems = Object.keys(
      data.list_pricing[0].list_category[dataItem].cat_item
    );
  }

  setUserId() {
    // get token from auth service
    this.token = this.userAuthService.getToken();
    this.formData.userId = this.token.userId;
  }

  async getUser(id: any): Promise<string> {
    try {
      const data: any = await from(this.userData.getUserData(id)).toPromise();
      return data.full_name;
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  setListingId(data: any) {
    this.formData.listingId = data._id;
  }

  // change date format to proper date format
  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'MMM d, y');
  }

  capitalizeWords(str: string) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  submitComment() {
    const url = 'http://localhost:3001/comment/';

    this.http.post(url, this.formData).subscribe((response: any) => {
      // console.log(response);
    });
  }
}
