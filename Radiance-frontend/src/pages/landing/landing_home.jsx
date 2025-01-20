import React from "react";
import "../../css/landingcss/landing_home.css";

const HomeLanding = () => {
  return (
    <section className="home-landing" id="home">
      <div className="home-left">
        <h1>Radiance Star Legislative Consult Ltd</h1>
        <p>Shaping Legislative Minds</p>
      </div>
      <div className="home-right">
        <div className="image-container">
          <div className="circle-fade"></div>
          <img
            src="/profiles.png"
            alt="Radiance Star"
            className="main-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeLanding;
