import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css'],
})
export class UserListingComponent {
  userListing: any;
  userId: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken: any = jwt_decode(token);
        this.userId = decodedToken.userId;

        // console.log(this.userId);
      } catch (err) {
        console.log(err);
      }
    }

    const url = 'http://localhost:3001/listing/list/user/' + this.userId;

    this.http.get(url).subscribe((response: any) => {
      this.userListing = response;

      console.log(this.userListing);
    });
  }

  onSubmit() {
    this.router.navigate(['dashboard/listing/add-listing']);
  }

  handleView() {
    this.router.navigate(['restaurant/' + this.userListing[0]._id]);
  }
}
