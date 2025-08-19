import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDB';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = (id) =>{
        /**
         * 1. understand what to store or save: => bookId
         * 2. where to store: database
         * 3. array. list, collection:
         * 4. check: if the book is already in the booklist.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */
        addToStoredReadList(id);
    }

    const handleAddToWishlist = (id)=>{
        addToStoredWishList(id);

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    className="max-w-sm rounded-lg shadow-2xl"
                    src={image}
                    alt="Movie" />
                <div>
                    <h2 className="card-title">{bookName}</h2>
                    <h4>By: {author}</h4>
                    <div className="divider  mb-0"></div>
                    <h4>{category}</h4>
                    <div className="divider mt-0 "></div>
                    <div><span className='font-semibold text-justify'>Review: </span>{review}
                    </div>
                    <div>
                        <p className='font-semibold'>Tags: {
                            tags.map((tag, index) => <button
                                key={index}
                                className="btn btn-xs bg-green-100 text-green-600 p-4 rounded-2xl mt-2 gap-5">{tag}</button>)
                        }</p>
                    </div>

                    <div className="divider mt-0 "></div>
                    <div className=''>
                        <h6 className='mt-0'>Number of Pages:
                            <span className='font-semibold text-lime-500'>               {totalPages}</span>
                        </h6>
                        <h6>Publisher:
                            <span className='font-semibold text-lime-500'>               {publisher}</span>
                        </h6>
                        <h6>Year of Publishing:
                            <span className='font-semibold text-lime-500'>               {yearOfPublishing}</span>
                        </h6>
                        <h6 className='mb-4'>Rating:
                            <span className='font-semibold text-lime-500'>               {rating}</span>
                        </h6>

                    </div>

                    <div className="card-actions justify-start">
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-primary btn-outline">Mark as Read</button>
                        <button onClick={() => handleAddToWishlist(bookId)} className="btn btn-primary">Add to Whishlist</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BookDetail;