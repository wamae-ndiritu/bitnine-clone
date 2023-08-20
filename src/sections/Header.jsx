import React, { useEffect, useState, useRef } from "react";
import { navLinks } from "../data/Links";
import Socials from "./Socials";

const Header = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSubMenu, setShowSubmenu] = useState(
    new Array(navLinks.length).fill(false)
  );
  const [subMenu, setSubMenu] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const viewSubMenu = (index) => {
    setShowSubmenu((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
    setSubMenu(!showSubMenu[index]);
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
  }, [showMobileMenu, subMenu]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const activeHeader = document.querySelector("#top-header");
      activeHeader?.classList.toggle("hide-top", window.scrollY === 0);
    });

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", function () {});
    };
  }, []);

  return (
    <div className='header-cont active-header'>
      <div className='top-header' id='top-header'>
        <h6>
          <span>AG Cloud Express :</span>
          Experience graph database in a cloud environment for FREE!
        </h6>
      </div>
      <div className='main-header' id='header'>
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
            <Socials />
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
              {navLinks.map((link, index) => {
                const { id, title } = link;
                return (
                  <li key={id}>
                    <p
                      className={`${link.items && "sub-menu-cont"} ${
                        id === 0 && "active-link"
                      }`}
                    >
                      {title}
                      {link.items && (
                        <i
                          className='fa fa-angle-down arrow-icon'
                          aria-hidden='true'
                          onClick={() => viewSubMenu(index)}
                        ></i>
                      )}
                    </p>
                    <div className='hide-dummy'>Dummy</div>
                    {link.items && (
                      <ul className='sub-menu sub-menu-big-screen'>
                        {link.items.map((item) => {
                          return (
                            <li key={item.id}>
                              {item.title}
                              {item.subItems && (
                                <>
                                  <i
                                    className='fa fa-angle-right'
                                    aria-hidden='true'
                                  ></i>
                                  <ul className='sub-menu-2'>
                                    {item.subItems.map((subItem) => {
                                      return (
                                        <li key={subItem.id}>
                                          {subItem.title}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {/* For Small Devices */}
                    {showSubMenu[index] && link.items && (
                      <ul className='sub-menu'>
                        {link.items.map((item) => {
                          return (
                            <li key={item.id}>
                              {item.title}
                              {item.subItems && (
                                <>
                                  <i
                                    className='fa fa-angle-right'
                                    aria-hidden='true'
                                  ></i>
                                  <ul className='sub-menu-2'>
                                    {item.subItems.map((subItem) => {
                                      return (
                                        <li key={subItem.id}>
                                          {subItem.title}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </>
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
