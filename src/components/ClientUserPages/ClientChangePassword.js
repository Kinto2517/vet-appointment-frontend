import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/ClientUserPages/ClientChangePassword.css";

function ClientChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
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

    fetch("/api/v1/clients/change-password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          console.log(response);
          throw new Error("Password change failed.");
        }
      })
      .then((data) => {
        setMessage("Password changed successfully.");
        setError("");
      })
      .catch((error) => {
        setMessage("");
        setError(error.message || "Password change failed.");
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
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Old Password:</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Confirm New Password:</label>
                <input
                  type="password"
                  name="newPasswordConfirmation"
                  value={formData.newPasswordConfirmation}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Change Password</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </div>
        </body>
      </div>
    );
  }
}

export default ClientChangePassword;
