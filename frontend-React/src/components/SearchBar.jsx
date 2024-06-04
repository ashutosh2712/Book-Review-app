import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const searchParams = {};
    if (author) searchParams.author = author;
    if (title) searchParams.title = title;
    if (genre) searchParams.genre = genre;
    onSearch(searchParams);
  };

  return (
    <form className="navSearch" onSubmit={handleSearch}>
      <input
        className="navSearchInput"
        type="text"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Search by author"
      />
      <input
        className="navSearchInput"
        type="text"
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Search by genre"
      />
      <input
        className="navSearchInput"
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search by title"
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
