import React from "react";
import "../../css/landingcss/landing_about.css";

const AboutLanding = () => {
  return (
    <section className="about-landing" id="about">
      <div className="about-left">
        <h2 className="about-title">Who we are</h2>
        <div className="about-rectangle">
          <hr />
          <p className="about-italic">We Train on Parliamentary Procedure and Practice</p>
          <hr />
          <p className="about-subtext">
            The training firm of choice for legislators and legislative staffs
          </p>
        </div>
      </div>
      <div className="about-right">
        <h2 className="about-highlight">Radiance Star Legislative Consult</h2>
        <p>
          Radiance Star Legislative Consult consists of a team of experienced
          trainers, having served in Parliament for many years who train on
          Parliamentary Procedure designed for legislators, Clerks, and other
          legislative staff, as well as a wide range of public policy-makers and
          regulators.
        </p>
        <button className="about-button">Know more</button>
      </div>
    </section>
  );
};

export default AboutLanding;
