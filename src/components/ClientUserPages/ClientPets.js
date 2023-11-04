import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ClientUserPages/ClientPets.css";

function ClientAllPets() {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("/api/v1/clients/1/pets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve pets");
        }
      })
      .then((data) => {
        setPets(data);
        setError("");
      })
      .catch((error) => {
        setError(error.message || "Failed to retrieve pets");
      });
  }, []);

  const handleDeletePet = (petId) => {
    fetch(`/api/v1/clients/1/delete-pet/${petId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setPets((prevPets) => prevPets.filter((pet) => pet.id !== petId));
        } else {
          throw new Error("Failed to delete the pet");
        }
      })
      .catch((error) => {
        setError(error.message || "Failed to delete the pet");
      });
  };

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
              <Link to="/client-home/index/update-client">Update Profile</Link>
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
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="all-pets-container">
            <h2>All Pets</h2>
            <ul>
              {pets.map((pet) => (
                <li key={pet.id}>
                  <h3>{pet.name}</h3>
                  <p>Species: {pet.species}</p>
                  <p>Breed: {pet.breed}</p>
                  <p>Age: {pet.age}</p>
                  <p>Weight: {pet.weight}</p>
                  <p>Gender: {pet.gender}</p>
                  <p>Date of Birth: {pet.dateOfBirth}</p>
                  <p>Color: {pet.color}</p>
                  <p>Medical History: {pet.medicalHistory}</p>
                  <p>Allergies: {pet.allergies}</p>
                  <p>Behavioral Notes: {pet.behavioralNotes}</p>
                  <p>Dietary Information: {pet.dietaryInformation}</p>
                  <p>Current Health Status: {pet.currentHealthStatus}</p>
                  <p>Microchip Information: {pet.microchipInformation}</p>
                  <p>Insurance Information: {pet.insuranceInformation}</p>
                  <button onClick={() => handleDeletePet(pet.id)}>
                    Delete Pet
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </body>
    </div>
  );
}

export default ClientAllPets;
