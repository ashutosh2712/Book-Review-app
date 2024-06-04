import React from "react";
import SearchBar from "./SearchBar";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navContainer">
      <h2 className="titleContainer">Book Review</h2>
      <SearchBar onSearch={onSearch} />
      <div className="rightNav">SignIn</div>
    </nav>
  );
};

export default Navbar;
