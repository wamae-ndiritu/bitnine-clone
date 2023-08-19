import React from "react";

const AgensSQLDBEngine = () => {
  return (
    <div className='engine-cont'>
      <h1 className='h1'>AgensSQL DB Engine</h1>
      <h6 className='h6'>Enhanced Data Security</h6>
      <p>
        AgensSQL is a PostgreSQL-based DBMS that guarantees optimal security and
        stability.
      </p>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-4'>
            <div className='card engine-card'>
              <div className='image-cont'>
                <img src='/assets/Password-Profile.png' alt='...' />
              </div>
              <ul>
                <li>user password policy reinforces login security</li>
                <li>excessive failed login attempts lock an account</li>
                <li>define rules for password complexity</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-4'>
            <div className='card engine-card'>
              <div className='image-cont'>
                <img src='/assets/Data-Redaction.png' alt='...' />
              </div>
              <ul>
                <li>enhanced data security of user personal information</li>
                <li>
                  resolve privacy issues in preparation for security audits
                </li>
                <li>
                  encryption or masking with unidentifiable special characters
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-4'>
            <div className='card engine-card'>
              <div className='image-cont'>
                <img src='/assets/Auditing.png' alt='...' />
              </div>
              <ul>
                <li>monitors database activities and collects data</li>
                <li>
                  traces object accessed or DDL & DML statements executed by a
                  user
                </li>
                <li>ecords all actions in logs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgensSQLDBEngine;
