import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.fetchUsers().subscribe(data => {
      this.users = data;
    });
  }

  editUser(id: number): void {

  }

  deleteUser(id: number): void {

  }
}
