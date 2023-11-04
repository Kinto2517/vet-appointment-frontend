import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/IndexPages/ClientIndex.css";

function VetDoctorIndex() {
  const token = localStorage.getItem("token");


  if (!token) {
    return (
      <div>
         <nav id="navbar" class="">
          <div class="nav-wrapper">
            <div class="logo">
              <a href="#home">Vet Doctor Logo</a>
            </div>

            <ul id="menu">
              <li>
                <Link to="/vetdoctor-home/index">Index Page</Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/add-education">Add Education</Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/add-experience">Add Experience</Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/update-vetdoctor">
                  Update Profile
                </Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/change-password">
                  Change Password
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <h1>Not Authorized!</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <nav id="navbar" class="">
          <div class="nav-wrapper">
            <div class="logo">
              <a href="#home">Vet Doctor Logo</a>
            </div>

            <ul id="menu">
              <li>
                <Link to="/vetdoctor-home/index">Index Page</Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/add-education">Add Education</Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/add-experience">Add Experience</Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/update-vetdoctor">
                  Update Profile
                </Link>
              </li>
              <li>
                <Link to="/vetdoctor-home/index/change-password">
                  Change Password
                </Link>
              </li>
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
}

export default VetDoctorIndex;
