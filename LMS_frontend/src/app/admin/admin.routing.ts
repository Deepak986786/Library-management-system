import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../core/components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { ManageBooksComponent } from "./components/manage-books/manage-books.component";
import { BookAddEditDialogComponent } from "./components/book-add-edit-dialog/book-add-edit-dialog.component";
import { AdminProfileComponent } from "./components/admin-profile/admin-profile.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login', },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users-list', component: UsersListComponent },
    { path: 'manage-books', component: ManageBooksComponent },
    { path: 'add-book', component: BookAddEditDialogComponent },
    { path: 'edit-book/:id', component: BookAddEditDialogComponent },
    { path: 'profile' , component: AdminProfileComponent },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }