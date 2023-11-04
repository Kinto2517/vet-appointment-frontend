import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ClientUserPages/ClientUpdate.css";

function ClientUpdate() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      setError("Unauthorized. Please log in.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      setError("Unauthorized. Please log in.");
      return;
    }

    fetch("/api/v1/clients/" + 1, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Update profile failed.");
        }
      })
      .then((data) => {
        setMessage("Profile updated successfully.");
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError(error.message || "Update profile failed.");
      });
  };

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
          <div>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Update Profile</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </div>
        </body>
      </div>
    );
  }
}

export default ClientUpdate;
