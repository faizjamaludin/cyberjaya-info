import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentDataService {

  constructor(private http: HttpClient) { }

  getListingCommentId(id: any): Observable<any> {
    const url = 'http://localhost:3001/comment/list/' + id;
    const data = this.http.get(url);

    return data;
  }

  deleteListingComment(id: string): Observable<any> {
    const url = 'http://localhost:3001/comment/delete/' + id;
    const data = this.http.delete(url);

    return data;
  }
}
