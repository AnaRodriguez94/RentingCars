import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-vehicles',
  templateUrl: './admin-vehicles.component.html',
  styleUrls: ['./admin-vehicles.component.css']
})
export class AdminVehiclesComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.fetchVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  editVehicle(id: number): void {
    // Lógica para editar vehículo
  }

  deleteVehicle(id: number): void {
    // Lógica para eliminar vehículo
  }
}
