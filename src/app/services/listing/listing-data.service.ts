import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentDataService } from '../comment/comment-data.service';

@Injectable({
  providedIn: 'root'
})
export class ListingDataService {

  listings: any;

  constructor(private http: HttpClient, private commentData: CommentDataService) { }

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

  getListingUserData(id: any): Observable<any> {
    const url = 'http://localhost:3001/listing/list/user/' + id;
    const data = this.http.get(url);

    return data
  }

  deleteData(id: string): Observable<any> {
    const url = 'http://localhost:3001/listing/list/delete/' + id;

    this.commentData.deleteListingComment(id)
    const data = this.http.delete(url);

    return data;
  }
}
