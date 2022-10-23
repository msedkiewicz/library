import { Controller, Get, Param } from '@nestjs/common';
import { AddingBook } from './adding-book';
import { InMemoryBooks } from './in-memory-books';

@Controller()
export class LibraryController {
  constructor(
    private addingBook: AddingBook,
    private inMemoryBooks: InMemoryBooks,
  ) {}
  @Get('add-book/:isbn/:title/:author')
  async addBook(
    @Param('isbn') isbn: string,
    @Param('title') title: string,
    @Param('author') author: string,
  ): Promise<string> {
    this.addingBook.execute({ isbn, title, author });
    return 'Book added';
  }

  @Get('get-books')
  async getBooks(): Promise<any[]> {
    return this.inMemoryBooks.books;
  }
}
