import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  getStaticData(): Observable<any> {
    return this.http.get('assets/MockData/paymentsData.json');
  }
}
