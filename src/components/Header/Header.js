import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your books of choice !
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Books in libraries are timeless treasures that enrich our lives in
            countless ways. They stimulate our intellect, nurture our
            creativity, and deepen our understanding of the world. Libraries,
            with their vast collections and nurturing environments, are
            invaluable assets that promote learning, preserve culture, and
            foster a love for reading. As we embrace the digital age, let us not
            forget the enduring magic of physical books in libraries and
            continue to cherish these sanctuaries of knowledge and imagination.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
