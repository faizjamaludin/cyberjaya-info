import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css'],
})
export class FormTestingComponent implements OnInit {
  formData!: FormGroup;
  files: File[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  // create form data
  createForm() {
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
      basicInfo: basicInfo,
      address: address,
      detailsOverview: detailsOverview,
      pricing: pricing,
    });

    console.log(this.formData.value);
    this.addCategory();
  }

  get pricingCat() {
    return this.formData.get('categories') as FormArray;
  }

  getCategoryItems(category: any): FormArray {
    return category.get('catItem') as FormArray;
  }

  addCategory() {
    const category = this.formBuilder.group({
      catTitle: '',
      catItem: this.formBuilder.array([]),
    });
    this.pricingCat.push(category);
  }

  addItem(category: any) {
    const item = this.formBuilder.group({
      itemTitle: '',
      itemDesc: '',
      itemPrice: '',
    });
    const categoryItems = this.getCategoryItems(category);
    categoryItems.push(item);
  }

  removeItem(category: any, itemIndex: number) {
    const categoryItems = this.getCategoryItems(category);
    categoryItems.removeAt(itemIndex);
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
}
