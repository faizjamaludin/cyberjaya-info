import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent {

  userListing: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    const url = 'http://localhost:3001/listing/alllist';

    this.http.get(url).subscribe((response: any) => {
      this.userListing = response;

      console.log(this.userListing)
    })
  }


  onSubmit() {
    this.router.navigate(['dashboard/listing/add-listing'])
  }
}
