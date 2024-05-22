import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private bookService: BookService) { }
  role: string = ''
  userId: string = '';
  @Input() book: any;
  ngOnInit(): void {
    this.role = this.auth.getUser()?.role;
    this.userId = this.auth.getUser()?._id;
  }
  borrowedStatus="Borrow"

  uiUpdated = new BehaviorSubject<boolean>(false);

  editBook(id: string) {
    console.log('edit book id', id)
    this.router.navigate(['/admin/edit-book', id])
  }

  deleteBook(bookId: string): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBookById(bookId).subscribe(
        response => {
          console.log('Book deleted successfully');
          // Optionally refresh the book list or notify the user
          this.router.navigate(['/admin/manage-books'])
        },
        error => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }

  borrowBook(bookId: string): void {
    this.bookService.borrowBook(bookId, this.userId).subscribe(
      response => {
        console.log('Book borrowed successfully');
        this.borrowedStatus = "Borrowed ✅"
        // setTimeout(() => {})
        // Optionally update the UI or notify the user
        this.uiUpdated.next(true);
      },
      error => {
        console.error('Error borrowing book:', error);
      }
    );
  }

}
