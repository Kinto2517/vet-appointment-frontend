import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/VetDoctorUserPages/VetDoctorUpdate.css";

function VetDoctorUpdate() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    city: "",
    description: ""
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

    fetch("/api/v1/vetdoctors/" + 1, {
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
        <body class="vet-doctor-update-container">
          <div >
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
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
              <div>
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
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

export default VetDoctorUpdate;
