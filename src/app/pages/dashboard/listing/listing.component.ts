import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {



  message: String = '';

  formData = {
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
  };


  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }


  onSubmit() {
    const url = 'http://localhost:3001/listing';


    this.http.post(url, this.formData).subscribe((response: any) => {
      console.log(response)
    });
  }

}
