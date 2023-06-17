import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullName: string = "";
  email: string = "";
  phone: string = "";

  token = localStorage.getItem('token');

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // change login button to profile image if user logged in
    const token: string | null = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken: any = jwt_decode(token)
        // const url = `http://localhost:3001/users/id/${decodedToken.userId}`

        this.fullName = decodedToken.name;
        this.email = decodedToken.email;
        this.phone = decodedToken.phone;

        console.log(decodedToken)

      } catch (err) {
        console.log(err)
      }
    }
  }


}
