import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/HomePages/VetDoctorHome.css";

function VetDoctorHome() {
  const location = useLocation();

  const isRegisterPage = location.pathname.includes("/register");

  return (
    <div>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="#home">Vet Doctor Logo</a>
          </div>

          <ul id="menu">
            <li>
              <Link to="/">Landing Page</Link>
            </li>
            <li>
              <Link to="/vetdoctor-home">Home</Link>
            </li>
            {!isRegisterPage && (
              <li>
                <Link to="/vetdoctor-home/register">Register</Link>
              </li>
            )}
            {isRegisterPage && (
              <li>
                <Link to="/vetdoctor-home/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <body>
        <section id="one">
          <div class="content">
            <div class="text-content">
              <h1 class="white">
                Providing Special care For <strong>Your Pets!</strong>
              </h1>
              <div class="two-button"></div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default VetDoctorHome;
