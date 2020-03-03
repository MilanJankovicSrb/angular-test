import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string = 'https://selfcare-service.demo.melita.com/interview/api/offers';

  constructor(private http: HttpClient) { }

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/100/subscriptions');
  }
}
