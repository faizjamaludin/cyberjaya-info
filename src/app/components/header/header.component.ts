import { Component, OnInit } from '@angular/core';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  icon = faArrowRightToBracket;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toLogin() {
    this.router.navigateByUrl('/login');
  }
}
