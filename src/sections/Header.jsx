import React from "react";

const Header = () => {
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
                <i className='fa fa-search' aria-hidden='true'></i>
                <i className='fa fa-times d-none' aria-hidden='true'></i>
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
