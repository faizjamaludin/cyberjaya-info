import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from 'src/app/services/auth/user/user-auth.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
})
export class AddListingComponent implements OnInit {
  message: String = '';
  userId: String = '';
  files: File[] = [];
  pricingData !: FormGroup

  formData = {
    userId: '',
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

  constructor(
    private http: HttpClient,
    private userAuth: UserAuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const token = this.userAuth.getToken();
    this.formData.userId = token.userId;
  }

  // ##############################################
  onSubmit() {
    // const userId =
    const url = 'http://localhost:3001/listing/';

    this.http.post(url, this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }

  // select picture from local. can select multiple pictures
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }


  // remove picture from the gallery section.
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



  // ##############################################

}
