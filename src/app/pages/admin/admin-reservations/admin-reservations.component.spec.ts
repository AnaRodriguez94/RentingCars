import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.css']
})
export class AdminReservationsComponent implements OnInit {
  reservations: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.fetchReservations().subscribe(data => {
      this.reservations = data;
    });
  }

  editReservation(id: number): void {
    // Lógica para editar reserva
  }

  deleteReservation(id: number): void {
    // Lógica para eliminar reserva
  }
}
