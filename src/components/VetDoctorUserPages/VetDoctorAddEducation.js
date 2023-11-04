import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/VetDoctorUserPages/VetDoctorAddEducation.css";

function VetDoctorAddEducation() {
  const [formData, setFormData] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    graduationDate: "",
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

    const token = localStorage.getItem("token");

    fetch(`/api/v1/vetdoctors/1/add-education`, {
      method: "POST",
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
          throw new Error("Adding education failed.");
        }
      })
      .then((data) => {
        setMessage("Education added successfully.");
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError(error.message || "Adding education failed.");
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
      <div class="vet-doctor-add-education">
        <h2>Add Education</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Institution:</label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Field of Study:</label>
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
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
            <label>Graduation Date:</label>
            <input
              type="date"
              name="graduationDate"
              value={formData.graduationDate}
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
          <button type="submit">Add Education</button>
        </form>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default VetDoctorAddEducation;
