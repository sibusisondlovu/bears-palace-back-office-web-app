import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from 'src/app/modules/workspace/workspace.component';
import { BookingsComponent } from 'src/app/modules/booking/bookings/bookings.component';
import { DefaultComponent } from './default.component';
import { CreateBookingComponent } from 'src/app/modules/booking/create-booking/create-booking.component';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DefaultComponent,
    WorkspaceComponent,
    BookingsComponent,
    CreateBookingComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
