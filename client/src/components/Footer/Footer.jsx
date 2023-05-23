import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <section className="end">
      <div className="footer">
        <div>
          <h4>Top Products</h4> <br />
          <p>Managed Website</p> <br />
          <p>Manage Reputation</p> <br />
          <p>Power Tools</p> <br />
          <p>Marketing Service</p>
        </div>

        <div>
          <h4>Newsletter</h4> <br />
          <p>You can trust us. we only send promo offers, not a single spam.</p> <br />
         <div className="form">
         <input type="text" className="footer" placeholder="Enter Email"/> <br />
          <button type="submit" className="footbtn">SUBSCRIPE</button>
         </div>
        </div>

        <div>
            <h4>Instragram Feed</h4>
        </div>

      </div>
      
      </section>
    </>
  );
};

export default Footer;
