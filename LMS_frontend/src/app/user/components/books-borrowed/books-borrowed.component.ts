import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'books-borrowed',
  templateUrl: './books-borrowed.component.html',
  styleUrls: ['./books-borrowed.component.scss']
})
export class BooksBorrowedComponent implements OnInit {

  borrowedBooks: any[] = [];
  userId: string;

  constructor(private bookService: BookService, private authService: AuthService) {
    this.userId = this.authService.getUser()?._id;
  }

  ngOnInit(): void {
    this.getBorrowedBooks();
  }

  getBorrowedBooks(): void {
    this.authService.getBorrowedBooks(this.userId).subscribe(
      (books) => {
        this.borrowedBooks = books;
        console.log('borrowedBooks', this.borrowedBooks)
      },
      (error) => {
        console.error('Error fetching borrowed books:', error);
      }
    );
  }

  returnBook(bookId: string): void {
    this.bookService.returnBookById(bookId, this.userId).subscribe(
      (response) => {
        console.log('Book returned successfully');
        this.getBorrowedBooks(); // Refresh the list
      },
      (error) => {
        console.error('Error returning book:', error);
      }
    );
  }
}
