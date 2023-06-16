import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUserData(id: any): Observable<any> {
    const url = 'http://localhost:3001/users/id/' + id;
    const data = this.http.get(url);

    return data;
  }
}
