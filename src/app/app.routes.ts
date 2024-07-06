import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RentComponent } from './pages/rent/rent.component';
import { isNotLoggedInGuard } from './guards/is-not-logged-in.guard';
import { MeComponent } from './pages/me/me.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { MyBookingsComponent } from './pages/me/my-bookings/my-bookings.component';
import { MyInfoComponent } from './pages/me/my-info/my-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminReservationsComponent } from './pages/admin/admin-reservations/admin-reservations.component';
import { AdminVehiclesComponent } from './components/admin/admin-vehicles/admin-vehicles.component';
import { AdminServicesComponent } from './pages/admin/admin-services/admin-services.component';
import { PrivateAreaModifyReservationComponent } from './private-area-modify-reservation/private-area-modify-reservation.component';
import { PrivateAreaPersonalInfoComponent } from './private-area-personal-info/private-area-personal-info.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [isNotLoggedInGuard]
    },
    {
        path: "signup",
        component: SignupComponent,
        canActivate: [isNotLoggedInGuard]
    },
    {
        path: "rent/:id",
        component: RentComponent
    },
    {
        path: "me",
        component: MeComponent,
        canActivate: [isLoggedInGuard],
        children:[
            {
                path: "my-bookings",
                component: MyBookingsComponent
            },
            {
                path: "my-info",
                component: MyInfoComponent
            }
        ]
    }
    {
      path: 'admin/usuarios',
      component: AdminUsersComponent
    },
  {
    path: 'admin/reservas',
    component: AdminReservationsComponent
  },
  {
    path: 'admin/vehiculos',
    component: AdminVehiclesComponent
  },
  {
    path: 'admin/servicios',
    component: AdminServicesComponent
  },
  {
    path: 'area-privada/modificar-reserva',
    component: PrivateAreaModifyReservationComponent
  },
  {
    path: 'area-privada/informacion-personal',
    component: PrivateAreaPersonalInfoComponent
  },
  {
    path: '', redirectTo: '/admin/usuarios',
    pathMatch: 'full'
  }
];

