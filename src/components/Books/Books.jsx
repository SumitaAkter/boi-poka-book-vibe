import React, { useState } from 'react';
import Book from '../Book/Book';
import booksData from '../../data/booksData.json';

const Books = () => {
    const [books] = useState(booksData);

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className='text-4xl font-bold text-center mb-6'>Books</h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                {books.map(book => (
                    <Book book={book} key={book.bookId} />
                ))}
            </div>
        </div>
    );
};

export default Books;
