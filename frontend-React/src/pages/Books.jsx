import React from "react";
import { books } from "../data/constant";
const Books = () => {
  return (
    <div className="booksContainer">
      <div className="booksList">
        {books.map((book) => (
          <div className="bookGrid">
            <img src={book.image} alt="" className="bookImg" />
            <p>
              <b>Book :</b>
              {book.title}
            </p>
            <p>
              <b>Author :</b> {book.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
