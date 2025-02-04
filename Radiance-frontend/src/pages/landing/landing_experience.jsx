import React from "react";
import "../../css/landingcss/landing_experience.css";

const ExperienceLanding = () => {
  return (
    <section className="experience-landing" id="experience">
      <div className="experience-left">
        <h2>Training Experience</h2>
      </div>
      <div className="experience-right">
        <div className="experience-image-container">
          <div className="text-overlay">
            <p>
              Radiance Legislative Consult Ltd trainers have been training
              Members of Parliament, Parliamentary Staff as well as various
              County Assembly Members and their staff. Due to their experience,
              the trainers have also been identified by ESAMI and CPST and have
              worked under them as their training consultants.
            </p>
            <button>Know more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceLanding;
