import React from "react";
import { books } from "../data/constant";
import { Link } from "react-router-dom";
const Books = () => {
  return (
    <div className="booksContainer">
      <div className="booksList">
        {books.map((book) => (
          <Link to={`/books/${book._id}`}>
            <div className="bookGrid" key={book._id}>
              <img src={book.image} alt="" className="bookImg" />
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
