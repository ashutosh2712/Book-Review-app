import { Link } from "react-router-dom";

const Books = ({ books }) => {
  return (
    <div className="booksContainer">
      <div className="booksList">
        {books.map((book) => (
          <Link to={`/books/${book._id}`} key={book._id}>
            <div className="bookGrid" key={book._id}>
              <img
                src={`http://localhost:3000/uploads/` + book.image}
                alt={book.image}
                className="bookImg"
              />
              {/* {book.image} */}
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
