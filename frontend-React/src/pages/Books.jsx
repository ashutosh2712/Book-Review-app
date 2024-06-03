import React, { useEffect, useState } from "react";
import { books } from "../data/constant";
import { Link } from "react-router-dom";
import axios from "axios";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="booksContainer">
      <div className="booksList">
        {books.map((book) => (
          <Link to={`/books/${book._id}`} key={book._id}>
            <div className="bookGrid" key={book._id}>
              {/* <img src={book.image} alt="" className="bookImg" /> */}
              {book.image}
              <p>
                <b>Book :</b>
                {book.title}
              </p>
              <p>
                <b>Author :</b> {book.author}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
