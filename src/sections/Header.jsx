import React, { useEffect, useState, useRef } from "react";
import { navLinks } from "../data/Links";

const Header = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

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
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showMobileMenu) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
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
          <div className='menu' id='menu' ref={linksContainerRef}>
            <ul ref={linksRef}>
              {navLinks.map((link) => {
                const { id, title } = link;
                return (
                  <li key={id}>
                    <p>{title}</p>
                    <div className='hide-dummy'>Dummy</div>
                    {link.items && (
                      <ul className='sub-menu'>
                        {link.items.map((item) => {
                          return (
                            <li key={item.id}>
                              {item.title}
                              {item.subItems && (
                                <ul className='sub-menu-2'>
                                  {item.subItems.map((subItem) => {
                                    return (
                                      <li key={subItem.id}>{subItem.title}</li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
