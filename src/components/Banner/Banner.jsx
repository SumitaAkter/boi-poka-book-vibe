import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-xl">
            <div className="hero-content flex-col lg:flex-row-reverse p-5 lg:p-24">
                <img
                    src={bannerImg}
                    className="lg:max-w-sm rounded-lg shadow-2xl"
                />
                <div className='sm:text-center'>
                    <h1 className="text-2xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-green-500 mt-6 lg:mt-10">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;