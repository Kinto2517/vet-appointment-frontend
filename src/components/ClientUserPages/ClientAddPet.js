import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ClientUserPages/ClientAddPet.css";

function ClientAddPet() {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: 0,
    gender: "",
    weight: 0,
    dateOfBirth: "",
    color: "",
    medicalHistory: "",
    allergies: "",
    behavioralNotes: "",
    dietaryInformation: "",
    currentHealthStatus: "",
    microchipInformation: "",
    insuranceInformation: "",
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

    fetch("/api/v1/clients/" + 1 + "/add-pet", {
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
          throw new Error("Add pet failed.");
        }
      })
      .then((data) => {
        setMessage("Pet added successfully.");
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError(error.message || "Add pet failed.");
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
          <div className="add-pet-container">
            <h2>Add Pet</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Pet Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Species:</label>
                <input
                  type="text"
                  name="species"
                  value={formData.species}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Breed:</label>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Gender:</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Weight:</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Color:</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Medical History:</label>
                <input
                  type="text"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Allergies:</label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Behavioral Notes:</label>
                <input
                  type="text"
                  name="behavioralNotes"
                  value={formData.behavioralNotes}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Dietary Information:</label>
                <input
                  type="text"
                  name="dietaryInformation"
                  value={formData.dietaryInformation}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Current Health Status:</label>
                <input
                  type="text"
                  name="currentHealthStatus"
                  value={formData.currentHealthStatus}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Microchip Information:</label>
                <input
                  type="text"
                  name="microchipInformation"
                  value={formData.microchipInformation}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Insurance Information:</label>
                <input
                  type="text"
                  name="insuranceInformation"
                  value={formData.insuranceInformation}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Add Pet</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </div>
        </body>
      </div>
    );
  }
}

export default ClientAddPet;
