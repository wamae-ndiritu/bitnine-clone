import React, { useEffect, useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const searchInput = document.getElementById("search");
    if (showSearch) {
      searchInput.classList.add("search-active");
    } else {
      searchInput.classList.remove("search-active");
    }
  }, [showSearch]);

  return (
    <div className='cont'>
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
        <div className='navbar'></div>
      </div>
    </div>
  );
};

export default Header;
