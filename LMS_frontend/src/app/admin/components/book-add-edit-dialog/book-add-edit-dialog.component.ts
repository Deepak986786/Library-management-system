import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private bookService: BookService, private router: Router

  ) { }
  ngOnInit(): void {
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
    this.bookService.addBook(book).subscribe(data => {
      console.log('addedbook data', data);
    })
  }
  cancelEdit() {
    this.router.navigate(['/admin/manage-books']);
  }
}
