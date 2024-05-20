import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../core/components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { ManageBooksComponent } from "./components/manage-books/manage-books.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login',},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users-list', component: UsersListComponent},
    { path: 'manage-books' , component : ManageBooksComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{}