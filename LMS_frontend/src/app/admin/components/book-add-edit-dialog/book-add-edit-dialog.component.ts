import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'book-add-edit-dialog',
  templateUrl: './book-add-edit-dialog.component.html',
  styleUrls: ['./book-add-edit-dialog.component.scss']
})
export class BookAddEditDialogComponent implements OnInit {
  isEdit = false;
  title: any;
  author: any;
  price: any;
  description: any;
  category: any;
  image: any;
  rating: any;
  stock: any;
  bookId: any;
  statusMessage = ''


  constructor(private bookService: BookService, private router: Router, private actRoute: ActivatedRoute

  ) { }
  ngOnInit(): void {
    debugger
    this.actRoute.paramMap.subscribe(params => {
      this.bookId = params.get('id');
      if (this.bookId) {
        this.getBookById(this.bookId);
      }
    });
  }

  getBookById(id: string): void {
    debugger
    this.bookService.getBookById(id).subscribe({
      next: (data: any) => {
        console.log('book by id', data)
        this.title = data.title;
        this.author = data.author;
        this.price = data.price;
        this.description = data.description;
        this.image = data.image;
        this.stock = data.stock;
        this.category = data.category;

      },
      error: (error: any) => {
        console.error('Error fetching book details:', error);
      }
    });
  }

  saveBook() {
    let book = {
      title: this.title,
      author: this.author,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image,
      stock: this.stock
    }
    if (this.bookId) {
      this.bookService.updateBook(this.bookId, book).subscribe(data => {
        this.statusMessage = "Book updated successfully!";
        setTimeout(() => {
          this.statusMessage = ''
        }, 2000)
      })
    } else {
      this.bookService.addBook(book).subscribe(data => {
        console.log('addedbook data', data);
        this.statusMessage = "Book added successfully!";
        setTimeout(() => {
          this.statusMessage = ''
        }, 2000)
      })
    }
  }
  cancelEdit() {
    this.router.navigate(['/admin/manage-books']);
  }
}
