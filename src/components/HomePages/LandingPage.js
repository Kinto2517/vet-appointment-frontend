import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/HomePages/LandingPage.css"; // Define your CSS for the landing page

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-side client-side client-background-image">
        <Link to="/client-home">
          <button className="button-56">Go to Client Home</button>
        </Link>
      </div>
      <div className="landing-side vetdoctor-side vetdoctor-background-image">
        <Link to="/vetdoctor-home">
          <button className="button-56">Go to Vet Doctor Home</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
