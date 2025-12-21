import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(language: string): Observable<any> {
    return this.http.get(`../../../assets/content/home/home.${language}.json`);
  }
}
