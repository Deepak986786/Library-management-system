import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../core/components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { BooksBorrowedComponent } from "./components/books-borrowed/books-borrowed.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books-borrowed', component: BooksBorrowedComponent },
    { path: 'profile', component: UserProfileComponent }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }