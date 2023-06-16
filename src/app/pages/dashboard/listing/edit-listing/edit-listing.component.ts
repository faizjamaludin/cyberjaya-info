import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

  constructor(public location: Location, private http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit() {

  }
}
