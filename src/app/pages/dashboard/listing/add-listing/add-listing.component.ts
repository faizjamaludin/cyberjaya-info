import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthService } from 'src/app/services/auth/user/user-auth.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
})
export class AddListingComponent implements OnInit {
  message: String = '';
  files: File[] = [];
  formData!: FormGroup;
  faXmark = faXmark;

  constructor(
    private http: HttpClient,
    private userAuth: UserAuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  // ##############################################
  // create form data
  createForm() {
    const token = this.userAuth.getToken();

    const basicInfo = this.formBuilder.group({
      selectedType: ['Restaurant'],
      selectedCategory: ['Food'],
      listingName: ['', Validators.required],
    });

    const address = this.formBuilder.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      zip: ['', Validators.required],
      selectedState: ['Cyberjaya'],
    });

    const detailsOverview = this.formBuilder.group({
      overview: [''],
      phone: [''],
      web: [''],
      email: ['', Validators.email],
      fb: [''],
      insta: [''],
      twitter: [''],
    });

    const pricing = this.formBuilder.group({
      pricingCat: this.formBuilder.array([]),
    });

    this.formData = this.formBuilder.group({
      userId: token.userId,
      basicInfo: basicInfo,
      address: address,
      detailsOverview: detailsOverview,
      pricing: pricing,
    });

    this.addCategory();
  }

  get pricingCat() {
    return this.formData.get('pricing.pricingCat') as FormArray;
  }

  getDetailItem(category: any): FormArray {
    return category.get('catItem') as FormArray;
  }

  addCategory() {
    const category = this.formBuilder.group({
      catTitle: '',
      catItem: this.formBuilder.array([]),
    });
    this.pricingCat.push(category);
    this.addItem(category);
  }

  addItem(category: any) {
    const item = this.formBuilder.group({
      itemTitle: '',
      itemDesc: '',
      itemPrice: '',
    });
    const categoryItems = this.getDetailItem(category);
    categoryItems.push(item);
  }

  removeItem(category: any, itemIndex: number) {
    const categoryItems = this.getDetailItem(category);
    categoryItems.removeAt(itemIndex);
  }

  removeCategory(catIndex: number) {
    this.pricingCat.removeAt(catIndex);
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

  onSubmit() {
    const url = 'http://localhost:3001/listing';
    const data = this.formData.value;
    const token = this.userAuth.getToken();
    const formData = new FormData();
    const restName = this.formData.value.basicInfo.listingName;

    formData.append('restName', restName);

    for (const file of this.files) {
      formData.append('file', file);
    }

    formData.append('data', JSON.stringify(data));

    if (this.formData.valid) {
      this.http.post(url, formData).subscribe((response: any) => {
        console.log(response);
      });
      console.log(this.formData.value);
    } else {
      console.log('nope');
    }
  }
}
