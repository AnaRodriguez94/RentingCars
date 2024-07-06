import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminReservationsComponent } from './admin-reservations/admin-reservations.component';
import { AdminVehiclesComponent } from './pages/admin/admin-vehicles/admin-vehicles.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { PrivateAreaModifyReservationComponent } from './private-area-modify-reservation/private-area-modify-reservation.component';
import { PrivateAreaPersonalInfoComponent } from './private-area-personal-info/private-area-personal-info.component';

@NgModule({
  selector: 'app-root',
  standalone: true,
  declarations: [
    AppComponent,
    AdminUsersComponent,
    AdminReservationsComponent,
    AdminVehiclesComponent,
    AdminServicesComponent,
    PrivateAreaModifyReservationComponent,
    PrivateAreaPersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rentingcars';
}
