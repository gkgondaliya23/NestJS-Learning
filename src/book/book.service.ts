import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // Add New Book
  addBookService(book: Book): string {
    this.books.push(book);

    return 'New Book Added Successfully...';
  }

  // Get All Book
  getAllBooks(): Book[] {
    return this.books;
  }

  // update Book
  updateBookService(book: Book): string {
    let index = this.books.findIndex(
      (currentBook) => book.id === currentBook.id,
    );

    this.books[index] = book;
    return 'Update Book Successfully...';
  }

  // Delete Book
  deleteBookService(bookId: number): string {
    this.books = this.books.filter((book) => bookId != book.id);

    return 'Delete Book Successfully...';
  }
}
