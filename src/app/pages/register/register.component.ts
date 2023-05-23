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

  constructor(private http: HttpClient) { }

  capitalizeWords = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  onSubmit() {
    const url = 'http://localhost:3001/users';
    this.http.post(url, this.formData).subscribe((response: any) => {
      this.message = this.capitalizeWords(response.message);
    });
  }


}
