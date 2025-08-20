import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;

    return (
        <div className="card bg-base-100 shadow-xl p-4 flex flex-col h-full w-full max-w-xs sm:max-w-sm lg:max-w-md">
            {/* Image with real book proportion */}
            <div className="w-full">
                <img
                    src={image}
                    alt={bookName}
                    className="w-full rounded-lg shadow-md object-cover aspect-[2/3]"
                />
            </div>

            {/* Card body */}
            <div className="card-body flex flex-col flex-grow p-2">
                {/* Tags */}
                <div className='flex flex-wrap gap-2 mt-2'>
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className="btn btn-xs bg-green-200 text-green-600 p-2 rounded-2xl">{tag}</button>
                    ))}
                </div>

                {/* Book title */}
                <h2 className="card-title mt-2">
                    {bookName}
                    <div className="badge badge-secondary ml-2">NEW</div>
                </h2>

                <p className="text-sm">By: {author}</p>

                <div className="border-t-2 border-dashed my-2"></div>

                {/* Category + Button */}
                <div className="card-actions justify-between items-center mt-auto flex-col gap-2">
                    <div className="badge badge-outline">{category}</div>
                    <Link to={`/books/${bookId}`} className="w-full">
                        <button className="btn btn-primary btn-outline w-full">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Book;
