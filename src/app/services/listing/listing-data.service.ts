import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingDataService {

  listings: any;

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    const url = 'http://localhost:3001/listing/alllist';
    const data = this.http.get(url);

    return data;

  }

  getData(id: any): Observable<any> {
    const url = 'http://localhost:3001/listing/list/' + id;
    const data = this.http.get(url);

    return data;
  }
}
