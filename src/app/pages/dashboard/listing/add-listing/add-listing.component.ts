import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent {
  message: String = '';
  userId: String = '';

  formData = {
    listType: '',
    listCategory: '',
    listName: '',
    address: {
      address1: '',
      address2: '',
      postal: '',
    },
    overview: '',
    phone: '',
    web: '',
    email: '',
    fb: '',
    insta: '',
    twitter: '',
    openingHour: {
      monday: {
        from: '',
        to: '',
      },
      tuesday: {
        from: '',
        to: '',
      },
      wednesday: {
        from: '',
        to: '',
      },
      thursday: {
        from: '',
        to: '',
      },
      friday: {
        from: '',
        to: '',
      },
      saturday: {
        from: '',
        to: '',
      },
      sunday: {
        from: '',
        to: '',
      },
    },
    pricing: {
      category: {
        catTitle: '',
        catItem: {
          itemTitle: '',
          itemDesc: '',
          itemPrice: '',
        },
      },
    },
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit() {
    // const userId =
    const url = 'http://localhost:3001/listing/';

    this.http
      .post(url, [this.formData, { userId: this.userId }])
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
