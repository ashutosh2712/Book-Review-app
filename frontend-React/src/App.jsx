import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import Books from "./pages/Books";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (searchParams = {}) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/books`, {
        params: searchParams,
      });
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Books books={books} />,
    },
    {
      path: "books/:id",
      element: <Book />,
    },
  ]);
  return (
    <>
      <Navbar onSearch={fetchBooks} />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
