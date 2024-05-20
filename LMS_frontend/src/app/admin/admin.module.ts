import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { AdminRoutingModule } from './admin.routing';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    DashboardComponent,
    ManageBooksComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ]
})
export class AdminModule { }
