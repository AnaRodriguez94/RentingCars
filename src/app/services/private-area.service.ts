import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateAreaService {

  constructor(private http: HttpClient) { }

  fetchPersonalInfo(): Observable<any> {
    return this.http.get('/api/personal-info');
  }

  modifyReservation(reservationId: number, data: any): Observable<any> {
    return this.http.put(`/api/reservations/${reservationId}`, data);
  }
}
