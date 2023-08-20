import React from "react";

const AgensPackageInfo = () => {
  return (
    <div className='package-info-cont'>
      <h1>Agens Enterprise Package</h1>
      <p>
        Agens Enterprise Package comes with a high availability management
        server that supports backup and data monitoring dashboard that helps
        enterprise customers manage their data efficiently.
      </p>
      <div className='package-info-wrapper'>
        <div className='package-left'>
          <h5 className='h5'>Agens HA Manager</h5>
          <h6 className='h6'>
            <span>HA Clustering</span> – Failover/Failback, Load-balancing
          </h6>
          <div className='load-img'>
            <img src='/assets/bitnine-img-3.png' alt='...' />
          </div>
        </div>
        <div className='package-right'>
          <h5 className='h5'>Agens Enterprise Manager</h5>
          <div className='right-wrapper'>
            <div className='package-card'>
              <div className='card-front'>
                <h6>Backup/Restore</h6>
              </div>
              <div className='card-back'>
                <ul>
                  <li>provides a convenient interface for backup & restore</li>
                  <li>
                    provides backup & restore features for DB and table objects
                  </li>
                </ul>
              </div>
            </div>
            <div className='package-card'>
              <div className='card-front'>
                <h6>DB MOnitoring Dashboard</h6>
              </div>
              <div className='card-back'>
                <ul>
                  <li>monitors real-time session & transaction lock</li>
                  <li>provides status for server CPU & memory</li>
                </ul>
              </div>
            </div>
            <div className='package-card'>
              <div className='card-front'>
                <h6>Schedule Management</h6>
              </div>
              <div className='card-back'>
                <ul>
                  <li>
                    provides module for script, SQL job, and scheduling
                    management
                  </li>
                  <li>provides UX dedicated to scheduling</li>
                </ul>
              </div>
            </div>
            <div className='package-card'>
              <div className='card-front'>
                <h6>Database Audit</h6>
              </div>
              <div className='card-back'>
                <ul>
                  <li>enables auditing via user interface</li>
                  <li>view audit results via user interface</li>
                </ul>
              </div>
            </div>
            <div className='package-card'>
              <div className='card-front'>
                <h6>SQL Monitoring</h6>
              </div>
              <div className='card-back'>
                <ul>
                  <li>
                    collects query statistics required for performance analysis
                  </li>
                  <li>extracts monitoring results in query</li>
                </ul>
              </div>
            </div>
            <div className='package-card'>
              <div className='card-front'>
                <h6>Perfomance Management</h6>
              </div>
              <div className='card-back'>
                <ul>
                  <li>
                    monitors and collects operation status & statistical data
                  </li>
                  <li>
                    provides status reports required for improving performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgensPackageInfo;
