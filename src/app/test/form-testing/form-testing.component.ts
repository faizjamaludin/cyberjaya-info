import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css']
})
export class FormTestingComponent implements OnInit {

  formData!: FormGroup;
  files: File[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }


  // create form data
  createForm() {
    const basicInfo = this.formBuilder.group({
      selectedType: ['Restaurant'],
      selectedCategory: ['Food'],
      listingName: ['', Validators.required]

    })

    const address = this.formBuilder.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      zip: ['', Validators.required],
      selectedState: ['Cyberjaya'],
    })

    const detailsOverview = this.formBuilder.group({
      overview: [''],
      phone: [''],
      web: [''],
      email: ['', Validators.email],
      fb: [''],
      insta: [''],
      twitter: [''],
    })

    this.formData = this.formBuilder.group({
      basicInfo: basicInfo,
      address: address,
      detailsOverview: detailsOverview
    })

    console.log(this.formData.value)
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
