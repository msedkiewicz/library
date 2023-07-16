import { Module } from '@nestjs/common';
import { AddingBook } from './adding-book';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryBooks } from './in-memory-books';
import { LibraryController } from './book.controller';

@Module({
  imports: [],
  controllers: [AppController, LibraryController],
  providers: [AppService, AddingBook, InMemoryBooks],
})
export class AppModule {}
