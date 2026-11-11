import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() => {
    const books = await bookModel.fetch();
    return books;
}

export const CreateBook = async(book) => {
    const bookId = await bookModel.insert(book);
    return bookId
} 