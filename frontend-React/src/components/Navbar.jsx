import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <h2 className="titleContainer">Book Review</h2>
      <SearchBar />
      <div className="rightNav">SignIn</div>
    </nav>
  );
};

export default Navbar;
