import React, { useEffect, useState } from "react";
import booksData from "../../data/booksData.json"; 
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDB";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sortOption, setSortOption] = useState("default");

    const allBooks = booksData; 

    useEffect(() => {
        const storedReadList = getStoredReadList().map(id => parseInt(id));
        setReadList(allBooks.filter(book => storedReadList.includes(book.bookId)));

        const storedWishList = getStoredWishList().map(id => parseInt(id));
        setWishList(allBooks.filter(book => storedWishList.includes(book.bookId)));
    }, [allBooks]);

    const sortBooks = (books) => {
        if (sortOption === "title") return [...books].sort((a,b)=>a.bookName.localeCompare(b.bookName));
        if (sortOption === "year") return [...books].sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
        if (sortOption === "rating") return [...books].sort((a,b)=>b.rating - a.rating);
        return books;
    };

    const renderBookCard = (book) => {
        return (
            <div key={book.bookId} className="flex items-start bg-slate-800 shadow-md rounded-xl p-4 mb-6 gap-4 hover:shadow-lg transition">
                <div className="w-44 h-50 flex-shrink-0 bg-slate-700 shadow-md rounded-xl p-8">
                    <img src={book.image} alt={book.bookName} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <h2 className="text-xl font-bold mb-1">{book.bookName}</h2>
                    <p className="text-slate-300 mb-2">by {book.author}</p>
                    <div className="flex flex-wrap gap-2 mb-2 text-gray-300">
                        <span className='font-bold'>Tag: </span>
                        {book.tags?.map((tag,index)=><span key={index} className="bg-lime-100 text-lime-600 text-sm px-2 py-1 rounded-full">{tag}</span>)}
                        <p className="text-sm text-slate-200 mb-1 gap-8">
                            <span className="font-semibold">📅 Year: {book.yearOfPublishing}</span>
                        </p>
                    </div>
                    <p className="text-sm text-slate-200 mb-1 gap-8">
                        <span className="font-semibold">Publisher:</span> {book.publisher} <span className="font-semibold">| Pages:</span> {book.totalPages}
                    </p>
                    <div className='divider mr-96 mb-0'></div>
                    <div className="flex items-center justify-start gap-8 mt-2">
                        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-lg">{book.category}</span>
                        <span className="text-yellow-500 font-semibold">⭐ {book.rating}</span>
                        <Link to={`/books/${book.bookId}`} className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-lime-600 transition">View Details</Link>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-center py-4">📚 My Bookshelf</h2>
            <div className="mb-6 flex justify-center">
                <select className="border rounded-lg p-2 my-4 bg-green-700" onChange={(e)=>setSortOption(e.target.value)}>
                    <option value="default">Sort By</option>
                    <option value="title">Title</option>
                    <option value="pages">No. of pages</option>
                    <option value="year">Publishing Year</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            <Tabs>
                <TabList className="flex justify-start mb-4">
                    <Tab>Read List ({readList.length})</Tab>
                    <Tab>Wish List ({wishList.length})</Tab>
                </TabList>
                <TabPanel>
                    {readList.length>0 ? sortBooks(readList).map(renderBookCard) : <p className="text-gray-500">No books in read list.</p>}
                </TabPanel>
                <TabPanel>
                    {wishList.length>0 ? sortBooks(wishList).map(renderBookCard) : <p className="text-gray-500">No books in wish list.</p>}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
