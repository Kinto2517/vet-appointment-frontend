import React, { useState } from "react";
import "../../assets/styles/RegistrationPages/ClientRegistration.css";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function ClientRegistration() {
  const location = useLocation();

  const isRegisterPage = location.pathname.includes("/register");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  const isPhoneNumberNotEmtpy = (phoneNumber) => {
    return phoneNumber.length > 0;
  };

  const isFirstNameValid = (firstName) => {
    return firstName.length > 0;
  };

  const isLastNameValid = (lastName) => {
    return lastName.length > 0;
  };

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClientRegistration = async () => {
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

    if (!isPhoneNumberNotEmtpy(formData.phoneNumber)) {
      setResponse({
        error: "Phone number cannot be empty",
      });
      return;
    }

    if (!isFirstNameValid(formData.firstName)) {
      setResponse({
        error: "First name cannot be empty",
      });
      return;
    }

    if (!isLastNameValid(formData.lastName)) {
      setResponse({
        error: "Last name cannot be empty",
      });
      return;
    }

    try {
      const response = await fetch("/api/v1/auth/clientregister", {
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
          setResponse({ error: data.error, data: null });
          console.log(data);
        } else {
          console.log(data);
          setResponse({ data: data, error: null });
          setTimeout(() => {
            navigate("/client-home/login");
          }, 1000);
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
            <a href="#home">Clients Logo</a>
          </div>

          <ul id="menu">
            <li>
              <Link to="/">Landing Page</Link>
            </li>
            <li>
              <Link to="/client-home">Home</Link>
            </li>
            {!isRegisterPage && (
              <li>
                <Link to="/client-home/register">Register</Link>
              </li>
            )}
            {isRegisterPage && (
              <li>
                <Link to="/client-home/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div className="client-registration-container">
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
              <label for="firstName">First Name</label>
              <input
                class="form-control"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                class="form-control"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
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
            <button onClick={handleClientRegistration}>
              Register as Client
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

export default ClientRegistration;
