import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  getToken() {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken: any = jwt_decode(token)
        return decodedToken;

      } catch (err) {
        console.log(err)
        return err;
      }
    }

  }
}
