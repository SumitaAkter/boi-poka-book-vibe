import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-blue-400 py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex justify-start gap-4'>
                    {
                        tags.map((tag, index) => <button
                        key={index}
                        className="btn btn-xs bg-green-200 text-green-600 p-4 rounded-2xl">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="border-t-2 border-dashed mt-5 mb-5"></div>
                <div className="card-actions justify-between">
                    
                    <div className="badge badge-outline">{category}</div>
                    
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-100" aria-label="5 star" />
                    </div>
                </div>
                <Link to={`/books/${bookId}`}>
                    <button className="btn mt-4 p-2 btn-primary btn-outline">See Details</button>
                </Link>
            </div>
        </div>
        
    );
};

export default Book;