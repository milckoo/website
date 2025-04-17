import React from 'react';
import './Styles/MeetOurFarmer.css';

const MeetOurFarmer = () => {
  return (
    <div className="meetourfarmer">
      <div className="container">
        <div className="content-left">
          <h1 className="heading">
            The <span className="highlight">Hands</span> That Nurture!
          </h1>
          <p className="paragraph">
            Meet the faces behind the purity! Our farmers are committed to ethical
            and sustainable dairy farming, ensuring that every glass of milk is as
            fresh as nature intended.
          </p>
        </div>
        <div className="content-right">
          <div className="image-container">
            <img
              src="/MeetOurFarmer/Group 2 (1).png"
              alt="MILCKO Farmers"
              className="farmer-image"
            />
            <img
              src="/MeetOurFarmer/Group 3.png"
              alt="Supporting Local Farmers"
              className="badge-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurFarmer;