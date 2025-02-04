import React from "react";
import Footer from "./landing/footer";
import AboutLanding from "./landing/landing_about";
import ExperienceLanding from "./landing/landing_experience";
import HomeLanding from "./landing/landing_home";
import Navbar from "./landing/navbar";
import "../css/homepage.css";

const Homepage = () => {
    return (
        <>
        <div className="home-page">
        <Navbar />
        <HomeLanding />
        <AboutLanding />
        <ExperienceLanding />
        <Footer />
      </div>
        </>
    )
};

export default Homepage;