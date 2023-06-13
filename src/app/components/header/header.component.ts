import { Component, OnInit } from '@angular/core';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // declaration
  icon = faArrowRightToBracket;
  name: string = "";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // change login button to profile image if user logged in

  }

  // click for login page
  toLogin() {
    this.router.navigateByUrl('/login');
  }





}
