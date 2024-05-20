import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BooksBorrowedComponent } from './components/books-borrowed/books-borrowed.component';
import { UserRoutingModule } from './user.routing';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    BooksBorrowedComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }
