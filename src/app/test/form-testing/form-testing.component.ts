import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { UserAuthService } from 'src/app/services/auth/user/user-auth.service';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css'],
})
export class FormTestingComponent implements OnInit {
  formData!: FormGroup;
  files: File[] = [];

  // icons
  faXmark = faXmark;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authUser: UserAuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  // create form data
  createForm() {
    const gallery = this.formBuilder.group({
      pictures: this.formBuilder.array([]),
    });

    this.formData = this.formBuilder.group({
      gallery: gallery,
    });
  }

  get gallery(): FormArray {
    return this.formData.get('gallery.pictures') as FormArray;
  }

  addFilesToGallery(addedFiles: File[]) {
    const controlArray = this.gallery;

    addedFiles.forEach((file: File) => {
      controlArray.push(
        this.formBuilder.group({
          file: file,
        })
      );
    });
  }

  // select picture from local. can select multiple pictures
  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.addFilesToGallery(event.addedFiles);
  }

  // remove picture from the gallery section.
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSubmit() {
    const url = 'http://localhost:3001/listing/test/listing';

    const formData = new FormData();

    for (const file of this.files) {
      formData.append('file', file);
    }

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
