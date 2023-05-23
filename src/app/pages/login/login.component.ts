import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  message: string = '';
  user: any;
  token: string = '';

  formData = {
    email: '',
    password: '',
  };

  constructor(private http: HttpClient) { }

  capitalizeWords = (str: string) => {

    if (!str) {
      return "";
    }

    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  loginSubmit() {
    const url = 'http://localhost:3001/users/login';
    const params = new HttpParams()
      .set('email', this.formData.email)
      .set('password', this.formData.password);


    this.http.get(url, { params }).subscribe(
      (response: any) => {
        this.user = response.user;
        this.token = response.token;
        this.message = this.capitalizeWords(response.message);
        console.log(this.message)

        localStorage.setItem('token', this.token);
      },
      (error: any) => {
        this.message = error.error.message;

        console.log(this.message)
      }
    );


  }
}
