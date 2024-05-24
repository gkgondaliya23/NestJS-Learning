import { Body, Controller, Delete, Get, Param, Post, Put,  } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller('book')
export class BookController{
    constructor(private bookService: BookService){

    }

    @Post('/add-book')
    addNewBook(@Body() book: Book): string{
        return this.bookService.addBookService(book)
    }

    @Get('/findAll')
    getAllBooks(): Book[]{
        return this.bookService.getAllBooks();
    }

    @Put('/update-book')
    updateBook(@Body() book: Book): string{
        return this.bookService.updateBookService(book)
    }

    @Delete('/delete-book/:id')
    deleteBook(@Param("id") bookId: number): string{
        return this.bookService.deleteBookService(bookId)
    }
}