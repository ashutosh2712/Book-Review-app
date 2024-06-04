import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Book = () => {
  const { id } = useParams();
  const bookId = id;

  const [book, setBook] = useState({});

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/books/${bookId}`
        );
        if (response.data) {
          setBook(response.data);
        } else {
          console.error("Response is empty");
        }
      } catch (err) {
        console.error("Error loding book info:", err);
      }
    };
    fetchBook();
  }, [bookId]);

  if (!book) {
    console.error("No Book found with the given id");
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log("Your review");

    try {
      await axios.post(`http://localhost:3000/api/books/${bookId}/reviews`, {
        review,
        rating,
      });

      const response = await axios.get(
        `http://localhost:3000/api/books/${bookId}`
      );
      setBook(response.data);
      setReview("");
      setRating(0);
    } catch (err) {
      console.error("Error Submitting review");
    }
  };
  return (
    <div className="bookContainer">
      <h1>Book Details</h1>
      <Link to="/">
        <button className="homeLink">Go back</button>
      </Link>
      <div className="bookDetails">
        <div className="bookImgContainer">
          <img
            src={`http://localhost:3000/uploads/` + book.image}
            alt={book.image}
            className="bookDetailsImg"
          />
        </div>
        <div className="bookDetailsPoints">
          <p>
            <b>Title: </b>
            {book.title}
          </p>
          <p>
            <b>Author: </b>
            {book.author}
          </p>
          <p>
            <b>Description: </b>
            {book.description}
          </p>
          <p>
            <b>Average rating: </b>
            {book.average_rating > 0 ? book.average_rating.toFixed(1) : 0}
          </p>
          <p>
            <b>User Reviews: </b>
            {book.user_reviews && book.user_reviews.length > 0 ? (
              <ul>
                {book.user_reviews.map((review) => (
                  <li>{review}</li>
                ))}
              </ul>
            ) : (
              <p>No review available</p>
            )}
          </p>
        </div>
        <div className="writeReview">
          <h3>Rate and Review</h3>
          <form onSubmit={submitHandler} className="reviewForm">
            <div className="reviewRating">
              <label htmlFor="rating">Rating</label>
              <select
                name="rating"
                id="rating"
                value={rating}
                className="qtyValue"
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Average</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>

            <textarea
              name="rating"
              id="rating"
              rows="10"
              className="reviewTextarea"
              value={review}
              placeholder="Your Review.."
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
