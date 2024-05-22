import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getAllBooks() {
        return this.http.get(this.apiUrl + '/book/getAll');
    }
    getBookById(id: string) {
        return this.http.get(this.apiUrl + '/book/getBookById/' + id);
    }
    addBook(book: any) {
        return this.http.post(this.apiUrl + '/book/addBook', book);
    }

    updateBook(id: any, book: any) {
        return this.http.put(this.apiUrl + '/book/updateBook/' + id, book);
    }
    deleteBookById(id: string) {
        return this.http.delete(this.apiUrl + '/book/deleteBookById/' + id);
    }

    borrowBook(id: string, userId: string) {
        return this.http.post<any>(`${this.apiUrl}/book/borrow/${id}`, { userId });
    }

    returnBookById(id: string, userId: string) {
        return this.http.post<any>(`${this.apiUrl}/book/return/${id}`, { userId });
    }

}