import React, { useState } from "react";
import "../../assets/styles/RegistrationPages/VetDoctorRegistration.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

function VetDoctorRegistration() {
  const location = useLocation();

  const isRegisterPage = location.pathname.includes("/register");

  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    description: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [response, setResponse] = useState({
    data: null,
    error: null,
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /*
  const isPhoneNumberValid = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10}$/; // This will change depending on the country 
    return phoneNumberRegex.test(phoneNumber);
  }*/

  const isPasswordValid = (password) => {
    // Password should contain at least 1 uppercase letter, 1 special character, and 1 number
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*]/;
    const numberRegex = /[0-9]/;

    return (
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password) &&
      numberRegex.test(password)
    );
  };

  const isFullNameValid = (fullName) => {
    return fullName.length > 0;
  };

  const isCityValid = (city) => {
    return city.length > 0;
  };

  const isDescriptionValid = (description) => {
    return description.length > 0;
  };

  const isPhoneNumberNotEmtpy = (phoneNumber) => {
    return phoneNumber.length > 0;
  };

  const isUsernameValid = (username) => {
    return username.length > 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleVetDoctorRegistration = async () => {
    if (!isEmailValid(formData.email)) {
      setResponse({ error: "Invalid email format" });
      return;
    }

    if (!isPasswordValid(formData.password)) {
      setResponse({
        error:
          "Invalid password format (Password should contain at least 1 uppercase letter, 1 special character, and 1 number)",
      });
      return;
    }

    if (!isFullNameValid(formData.fullName)) {
      setResponse({
        error: "Full name cannot be empty",
      });
      return;
    }

    if (!isCityValid(formData.city)) {
      setResponse({
        error: "City cannot be empty",
      });
      return;
    }

    if (!isDescriptionValid(formData.description)) {
      setResponse({
        error: "Description cannot be empty",
      });
      return;
    }

    if (!isPhoneNumberNotEmtpy(formData.phoneNumber)) {
      setResponse({
        error: "Phone number cannot be empty",
      });
      return;
    }

    if (!isUsernameValid(formData.username)) {
      setResponse({
        error: "Username cannot be empty",
      });
      return;
    }

    try {
      const response = await fetch("/api/v1/auth/vetdoctorregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setResponse({ data });
        if (data.error != null) {
          // if there is an error
          setResponse({ error: data.error, data: null });
        } else {
          // if no error
          setResponse({ data: data, error: null });
          setTimeout(() => {
            navigate("/vetdoctor-home/login");
          }, 2000);
        }
      }
    } catch (error) {
      setResponse({ error: "Network error" });
    }
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
      <div className="vetdoctor-registration-container">
        <div class="signup__container">
          <div class="container__child signup__thumbnail">
            <div class="thumbnail__logo"></div>
            <div class="thumbnail__content text-center">
              <h2 class="heading--secondary">
                {" "}
                Welcome to Our Vet-Client Appointment Program
              </h2>
            </div>
            <div class="signup__overlay"></div>
          </div>
          <div class="container__child signup__form">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                class="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="kinto.2517"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="john.doe@kinto2517.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                class="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input
                class="form-control"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input
                class="form-control"
                type="text"
                name="city"
                id="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <input
                class="form-control"
                type="text"
                name="description"
                id="description"
                placeholder="Your Description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number</label>
              <input
                class="form-control"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="555 555 5555"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <button onClick={handleVetDoctorRegistration}>
              Register as Vet Doctor
            </button>
          </div>
        </div>
        <div className="error-message">
          {response && (
            <div>
              {response.data != null ? (
                <p>Successfully Registered, Redirecting To Login</p>
              ) : (
                <div>{response.error ? <p>{response.error}</p> : null}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VetDoctorRegistration;
