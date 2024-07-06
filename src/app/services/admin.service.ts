import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<any> {
    return this.http.get('/api/users');
  }

  fetchReservations(): Observable<any> {
    return this.http.get('/api/reservations');
  }

  fetchVehicles(): Observable<any> {
    return this.http.get('/api/vehicles');
  }
}
