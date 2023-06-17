import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/auth/user/user-auth.service';
import { ListingDataService } from 'src/app/services/listing/listing-data.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css'],
})
export class UserListingComponent {
  userListing: any[] = [];
  userId: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private userAuth: UserAuthService,
    private listingData: ListingDataService
  ) { }

  ngOnInit(): void {
    const token = this.userAuth.getToken()
    this.userId = token.userId;
    this.getListingData(this.userId);
  }

  async getListingData(id: any): Promise<string> {
    try {
      const data: any = await from(this.listingData.getListingUserData(id)).toPromise();
      this.userListing = data;

      console.log(this.userListing)

      return data;
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  onSubmit() {
    this.router.navigate(['dashboard/listing/add-listing']);
  }

  handleView(id: any) {
    this.router.navigate(['restaurant/' + id]);
  }

  handleEdit() {

  }

  async handleDel(id: string) {
    await from(this.listingData.deleteData(id)).toPromise();
  }
}
