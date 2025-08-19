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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-6">
                <img className="max-w-sm rounded-lg shadow-2xl" src={image} alt={bookName} />
                <div>
                    <h2 className="card-title">{bookName}</h2>
                    <h4>By: {author}</h4>
                    <div className="divider"></div>
                    <h4>Category: {category}</h4>
                    <div className="divider"></div>
                    <p><span className='font-semibold'>Review: </span>{review}</p>
                    <div className="mt-2">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className="btn btn-xs bg-green-100 text-green-600 p-2 rounded-2xl mr-2 mt-2">{tag}</button>
                        ))}
                    </div>
                    <div className="divider mt-4"></div>
                    <p><span className='font-semibold'>Pages:</span> {totalPages}</p>
                    <p><span className='font-semibold'>Publisher:</span> {publisher}</p>
                    <p><span className='font-semibold'>Year:</span> {yearOfPublishing}</p>
                    <p><span className='font-semibold'>Rating:</span> {rating} ⭐</p>
                    <div className="mt-4 flex gap-4">
                        <button onClick={handleMarkAsRead} className="btn btn-primary btn-outline">Mark as Read</button>
                        <button onClick={handleAddToWishlist} className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
