import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetail from "./components/BookDetail/BookDetail";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import PagesToRead from "./components/PagesToRead/PagesToRead";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import booksData from "./data/booksData.json"; // import once


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetail />,
        loader: ({ params }) => {
          const book = booksData.find(b => b.bookId === parseInt(params.bookId));
          return book || null;
        },
      },
      {
        path: "listedBooks",
        element: <ListedBooks />,
        loader: () => booksData, // load all books
      },
      {
        path: "pages-to-read",
        element: <PagesToRead />, // PagesToRead imports booksData internally
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
