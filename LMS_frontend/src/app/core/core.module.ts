import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavbarComponent,
        BooksListComponent,
        BookComponent,
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        NavbarComponent,
        BooksListComponent,
        BookComponent
    ]

})
export class CoreModule { }