import React from "react";
import { books } from "../data/constant";
import { Link, useParams } from "react-router-dom";
const Book = () => {
  const { id } = useParams();
  const bookId = id;

  const parsedId = parseInt(bookId);

  if (isNaN(parsedId)) {
    console.log("Invalid id type.");
  }

  const renderBook = books.find((book) => book._id === parsedId);

  if (!renderBook) {
    console.log("No Book found with the given id");
  }
  return (
    <div className="bookContainer">
      <h1>Book Details</h1>
      <Link to="/">
        <button className="homeLink">Go back</button>
      </Link>
      <div className="bookDetails">
        <div className="bookImgContainer">
          <img
            src={renderBook.image}
            alt="book-image"
            className="bookDetailsImg"
          />
        </div>
        <div className="bookDetailsPoints">
          <p>
            <b>Title: </b>
            {renderBook.title}
          </p>
          <p>
            <b>Author: </b>
            {renderBook.author}
          </p>
          <p>
            <b>Description: </b>
            {renderBook.description}
          </p>
          <p>
            <b>Average rating: </b>
            {renderBook.average_rating}
          </p>
          <p>
            <b>User Reviews: </b>
            <ul>
              {renderBook.user_reviews.map((review) => (
                <li>{review}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
