import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DefaultComponent } from './layouts/default/default.component';
import { BookingsComponent } from './modules/booking/bookings/bookings.component';
import { CreateBookingComponent } from './modules/booking/create-booking/create-booking.component';
import { WorkspaceComponent } from './modules/workspace/workspace.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [
        {
        path: '',
        component: WorkspaceComponent
    },
    {
        path: 'bookings',
        component: BookingsComponent
    },
    {
        path: 'new-booking',
        component: CreateBookingComponent
    }

    ]}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }