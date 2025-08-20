import React from 'react';
import bannerImg from '../../assets/books.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex flex-col p-2 lg:p-12 w-full items-center">
                
                {/* Image */}
                <img
                    src={bannerImg}
                    className="w-full max-w-lg rounded-lg shadow-2xl object-cover"
                    alt="Books Banner"
                />
                
                {/* Text under the image */}
                <div className='text-center mt-4 p-5'>
                    <h1 className="text-2xl lg:text-3xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/listedbooks">
                        <button className="btn bg-green-500 mt-4 lg:mt-6">View the list</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
