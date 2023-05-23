import React from "react";
import "./Global.css"

const Global = () => {
  return (
    <>
      <div className="container">
        <div>
          <img
            src="https://preview.colorlib.com/theme/robotics/img/about-img.png"
            alt="robotic"
          />
        </div>
        <div>
          <h1>Globally Connected by Large Network</h1>
          <br />
          <p>We are here to listen from you deliver exellence</p> <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim 
            ad minim.<br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor.
          </p> <br />
          <button className='btn2' style={{padding:"15px 25px", border:"none"}}>VIEW DETAILS</button>
        </div>
      </div>
    </>
  );
};

export default Global;
