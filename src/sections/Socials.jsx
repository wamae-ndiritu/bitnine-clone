import React from "react";

const Socials = ({ size }) => {
  return (
    <div className='icons'>
      <span style={{ fontSize: `${size}px` }}>
        <i className='fa fa-github' aria-hidden='true'></i>
      </span>
      <span style={{ fontSize: `${size}px` }}>
        <i className='fa fa-youtube-play' aria-hidden='true'></i>
      </span>
      <span style={{ fontSize: `${size}px` }}>
        <i className='fa fa-linkedin' aria-hidden='true'></i>
      </span>
      <span style={{ fontSize: `${size}px` }}>
        <i className='fa fa-facebook' aria-hidden='true'></i>
      </span>
      <span style={{ fontSize: `${size}px` }}>
        <i className='fa fa-medium' aria-hidden='true'></i>
      </span>
    </div>
  );
};

export default Socials;
