import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddBookDto } from './dto/add-book.dto';

@Controller('books')
export class LibraryController {
  private books = [];

  @Post()
  async addBook(@Body() { isbn, title, author }: AddBookDto): Promise<string> {
    if (this.books.find(({ isbn: bookIsbn }) => bookIsbn === isbn)) {
      throw new Error('This book is already in the system');
    }
    this.books.push({ isbn, title, author });
    return 'Book added';
  }

  @Put()
  updateBook(@Body() { isbn, title, author }): any {
    const index = this.books.findIndex(
      ({ isbn: bookIsbn }) => bookIsbn === isbn,
    );
    let book = this.books[index];

    book = { ...book, isbn, title, author };

    this.books[index] = book;
    return { book, index };
  }

  @Delete(':isbn')
  removeBook(@Param('isbn') isbn: string): void {
    this.books = this.books.filter(({ isbn: bookIsbn }) => bookIsbn === isbn);
  }

  @Get()
  async getBooks(): Promise<any[]> {
    return this.books;
  }
}
