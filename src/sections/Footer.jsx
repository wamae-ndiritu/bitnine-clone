import React from "react";

const Footer = () => {
  return (
    <div className='footer-cont'>
      <div className='footer-row'>
        <div className='col-f'>
          <h6>Products</h6>
          <ul>
            <li>Relational Database</li>
            <li>Graph Database</li>
            <li>Graph-based Solution</li>
          </ul>
        </div>
        <div className='col-f'>
          <h6 className='link'>Use Cases</h6>
        </div>
        <div className='col-f'>
          <h6 className='link'>Services</h6>
        </div>
        <div className='col-f'>
          <h6>Resources</h6>
          <ul>
            <li>Documentation</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className='col-f'>
          <h6 className='link'>Blog</h6>
        </div>
        <div className='col-f'>
          <h6>Company</h6>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='copyright-cont'>
        <p>&copy; 2023 by Bitnine Global Inc. All Rights Reserved.</p>
        <div className='footer-icons'></div>
      </div>
    </div>
  );
};

export default Footer;
