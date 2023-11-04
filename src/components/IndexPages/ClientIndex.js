import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/IndexPages/ClientIndex.css";

function ClientIndex() {
  const token = localStorage.getItem("token");


  if (!token) {
    return (
      <div>
        <nav id="navbar" class="">
          <div class="nav-wrapper">
            <div class="logo">
              <a href="#home">Clients Logo</a>
            </div>

            <ul id="menu">
              <li>
                <Link to="/client-home/index">Index Page</Link>
              </li>
              <li>
                <Link to="/client-home/index/pets">All Pets</Link>
              </li>
              <li>
                <Link to="/client-home/index/add-pet">Add Pet</Link>
              </li>
              <li>
                <Link to="/client-home/index/update-client">
                  Update Profile
                </Link>
              </li>
              <li>
                <Link to="/client-home/index/change-password">
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
              <a href="#home">Clients Logo</a>
            </div>

            <ul id="menu">
              <li>
                <Link to="/client-home/index">Index Page</Link>
              </li>
              <li>
                <Link to="/client-home/index/pets">All Pets</Link>
              </li>
              <li>
                <Link to="/client-home/index/add-pet">Add Pet</Link>
              </li>
              <li>
                <Link to="/client-home/index/update-client">
                  Update Profile
                </Link>
              </li>
              <li>
                <Link to="/client-home/index/change-password">
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

export default ClientIndex;
