import React, { useEffect, useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const searchInput = document.getElementById("search");
    if (showSearch) {
      searchInput.classList.add("search-active");
    } else {
      searchInput.classList.remove("search-active");
    }
  }, [showSearch]);

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (showMobileMenu) {
      menu.classList.add("show-menu");
    } else {
      menu.classList.remove("show-menu");
    }
  }, [showMobileMenu]);

  return (
    <div className='header-cont'>
      <div className='top-header'>
        <h6>
          <span>AG Cloud Express :</span>
          Experience graph database in a cloud environment for FREE!
        </h6>
      </div>
      <div className='main-header'>
        <div className='social-row'>
          <div className='right'>
            <div className='info'>
              <div className='search'>
                <input type='text' placeholder='SEARCH' id='search' />
                <span onClick={toggleSearch}>
                  <i
                    className={`fa ${showSearch ? "fa-times" : "fa-search"}`}
                    aria-hidden='true'
                  ></i>
                </span>
              </div>
              <h6>Contact</h6>
            </div>
            <div className='icons'>
              <span>
                <i className='fa fa-github' aria-hidden='true'></i>
              </span>
              <span>
                <i className='fa fa-youtube-play' aria-hidden='true'></i>
              </span>
              <span>
                <i className='fa fa-linkedin' aria-hidden='true'></i>
              </span>
              <span>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </span>
              <span>
                <i className='fa fa-medium' aria-hidden='true'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='navbar-row'>
          <div className='logo-cont'>
            <img src='/assets/bitnine-logo_.png' alt='logo' />
            <select className='lan-btn'>
              <option>Select Language</option>
              <option>English</option>
              <option>한국어</option>
            </select>
            <span className='menu-bar' onClick={toggleMenu}>
              <i className='fa fa-bars' aria-hidden='true'></i>
            </span>
          </div>
          <div className='menu' id='menu'>
            <ul>
              <li>Products</li>
              <li>Use Cases</li>
              <li>Services</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>Company</li>
              <li>Ir</li>
            </ul>
            <button>Try Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
