import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaDirections, FaCheck, FaStickyNote } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section>
        <h1 className="landing-title">
          Welcome to My<span>Daily</span>
        </h1>
        <h2>Productivity at your fingertips</h2>
        <p>
          MyDaily provides a one stop shop for notes, weather, to-dos and more
        </p>
        <br />
        <p>
          No longer do you have to check 3, 4 or 5 websites to get everything
          you're looking for. So login today and get started.
        </p>
        <div className="feature-wrapper">
          <div className="feature-left">
            <div className="landing-page-feature-icons">
              <p>Weather</p>
              <TiWeatherPartlySunny />
            </div>
            <div className="landing-page-feature-icons">
              <p>Notes</p>
              <FaStickyNote />
            </div>
          </div>
          <div className="feature-right">
            <div className="landing-page-feature-icons">
              <p>Directions</p>
              <FaDirections />
            </div>
            <div className="landing-page-feature-icons">
              <p>ToDo</p>
              <FaCheck />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
