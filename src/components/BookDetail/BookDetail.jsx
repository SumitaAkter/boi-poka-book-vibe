import React from 'react';
import { useParams } from 'react-router-dom';
import booksData from "../../data/booksData.json";
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDB';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const book = booksData.find(b => b.bookId === id);

    if (!book) return <div>Book not found</div>;

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = () => addToStoredReadList(id);
    const handleAddToWishlist = () => addToStoredWishList(id);

    return (
        <div className="bg-base-200 min-h-screen pt-8 pb-4">
            <div className="container mx-auto flex flex-col lg:flex-row items-start gap-6 px-4">
                
               
                <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-full rounded-lg shadow-2xl object-cover aspect-[2/3]"
                    />
                </div>

              
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">{bookName}</h2>
                    <h4 className="text-lg mt-1">By: {author}</h4>
                    <div className="divider my-2"></div>

                    <h4 className="font-semibold">Category: {category}</h4>
                    <div className="divider my-2"></div>

                    <p><span className='font-semibold'>Review: </span>{review}</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className="btn btn-xs bg-green-100 text-green-600 p-2 rounded-2xl">{tag}</button>
                        ))}
                    </div>

                    <div className="divider my-2"></div>

                    <p><span className='font-semibold'>Pages:</span> {totalPages}</p>
                    <p><span className='font-semibold'>Publisher:</span> {publisher}</p>
                    <p><span className='font-semibold'>Year:</span> {yearOfPublishing}</p>
                    <p><span className='font-semibold'>Rating:</span> {rating} ⭐</p>

                    <div className="mt-4 flex flex-col sm:flex-row sm:gap-4 gap-2">
                        <button onClick={handleMarkAsRead} className="btn btn-primary btn-outline w-full sm:w-auto">Mark as Read</button>
                        <button onClick={handleAddToWishlist} className="btn btn-primary w-full sm:w-auto">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
