import React from "react";

const SearchBar = () => {
  return (
    <form className="navSearch">
      <input
        className="navSearchInput"
        type="text"
        name="search"
        id="search"
        placeholder="Search.."
      />
      <button type="submit" className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
