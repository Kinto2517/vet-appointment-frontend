import React, { useState } from "react";
import "../../assets/styles/LoginPages/VetDoctorLogin.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

function VetDoctorLogin() {
  const location = useLocation();

  const isRegisterPage = location.pathname.includes("/register");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [response, setResponse] = useState({
    data: null,
    error: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isUsernameValid = (username) => {
    return username.length > 0;
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

  const handleVetDoctorLogin = async () => {
    if (!isUsernameValid(formData.username)) {
      setResponse({ error: "Username is required" });
      return;
    }

    if (!isPasswordValid(formData.password)) {
      setResponse({ error: "Password is required" });
      return;
    }

    try {
      const response = await fetch("/api/v1/auth/vetdoctorauthenticate", {
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
        } else {
          setResponse({ data: data, error: null });
          console.log(data);
          localStorage.setItem("token", data.access_token);
          setTimeout(() => {
            navigate("/vetdoctor-home/index");
          }, 1500);
        }
      } else {
        setResponse({ error: "Login failed" });
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
      <div class="cont">
        <div class="form sign-in">
          <h2>Welcome back,</h2>
          <label>
            <span>Username</span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <p class="forgot-pass">Forgot password?</p>
          <button onClick={handleVetDoctorLogin}>Login</button>
          <div style={{ marginLeft: "40%" }}>
            {response.data != null ? (
              <p>Redirecting...</p>
            ) : (
              <div>{response.error ? <p>{response.error}</p> : null}</div>
            )}
          </div>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VetDoctorLogin;
