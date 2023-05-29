import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  message: string = '';

  formData = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    cPassword: '',
  };

  errorMsg = {
    fullName: '',
    username: '',
    email: '',
    password: '',
    cPassword: '',
  }

  constructor(private http: HttpClient) { }

  capitalizeWords = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  onSubmit() {
    const url = 'http://localhost:3001/users';

    // validation

    if (this.formData.fullName == "") {
      this.errorMsg.fullName = "Please insert Full Name";
    }

    if (this.formData.username == "") {
      this.errorMsg.username = "Please insert Username";
    }

    if (this.formData.email == "") {
      this.errorMsg.email = "Please insert Email";
    }

    if (this.formData.password == "") {
      this.errorMsg.password = "Please insert Password";
    }

    if (this.formData.password == "") {
      this.errorMsg.cPassword = "Please insert Confirm Password";
    }

    if (this.formData.password !== this.formData.cPassword) {
      this.errorMsg.password = "Password is not match";
    }

    this.http.post(url, this.formData).subscribe((response: any) => {
      this.message = this.capitalizeWords(response.message);
    });

  }


}
