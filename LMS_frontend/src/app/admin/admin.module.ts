import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageBooksComponent } from './components/manage-books/manage-books.component';
import { AdminRoutingModule } from './admin.routing';
import { CoreModule } from '../core/core.module';
import { BookAddEditDialogComponent } from './components/book-add-edit-dialog/book-add-edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';



@NgModule({
  declarations: [
    AdminComponent,
    UsersListComponent,
    DashboardComponent,
    ManageBooksComponent,
    BookAddEditDialogComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class AdminModule { }
