import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/VetDoctorUserPages/VetDoctorAddExperience.css";

function VetDoctorAddExperience() {
  const [formData, setFormData] = useState({
    organization: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/v1/vetdoctors/1/add-experience`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add experience.");
        }
      })
      .then((data) => {
        setMessage("Experience added successfully.");
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError(error.message || "Failed to add experience.");
      });

    setFormData({
      organization: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

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
              <Link to="/vetdoctor-home/index/add-education">
                Add Education
              </Link>
            </li>
            <li>
              <Link to="/vetdoctor-home/index/add-experience">
                Add Experience
              </Link>
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
      <div className="vet-doctor-add-experience">
        <h2>Add Experience</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Organization:</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
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
          <button type="submit">Add Experience</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default VetDoctorAddExperience;
