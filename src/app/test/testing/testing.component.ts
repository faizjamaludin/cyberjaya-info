import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {
  formData!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.formData = this.formBuilder.group({
      categories: this.formBuilder.array([]),
    });

    // Create at least one initial category
    this.addCategory();
  }

  get categories() {
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
    this.categories.push(category);
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

  submitForm() {
    // Handle form submission logic
    console.log(this.formData.value);
    const url = 'http://localhost:3001/listing/';

    this.http.post(url, this.formData.value).subscribe((response: any) => {
      console.log(response);
    });
  }
}
