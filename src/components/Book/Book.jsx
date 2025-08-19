import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-blue-400 py-8 rounded-2xl'>
                <img src={image} className='h-[166px] object-cover' alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex flex-wrap justify-start gap-2'>
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className="btn btn-xs bg-green-200 text-green-600 p-2 rounded-2xl">{tag}</button>
                    ))}
                </div>
                <h2 className="card-title mt-2">
                    {bookName}
                    <div className="badge badge-secondary ml-2">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed my-3"></div>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">{category}</div>
                </div>
                <Link to={`/books/${bookId}`}>
                    <button className="btn mt-4 p-2 btn-primary btn-outline w-full">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Book;
