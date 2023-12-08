
// forgetPasswordSectio.js
import React, { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function ForgetPasswordSection() {
  const [email, setEmail] = useState("");

  const [passwordReset, setPasswordReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/eventup/src/php/forget_password.php",
        { email }
      );
      if (response.data.success) {
        setPasswordReset(true); // Show password reset fields
      } else {
        alert(response.data.message); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!validatePassword(newPassword)) {
      alert(
        "Password must be at least 8 characters long, include a number, an uppercase letter, and a special character"
      );
      return;
    } else {
      try {
        const response = await axios.post(
          "http://localhost/eventup/src/php/rest_password.php",
          {
            email, // Email is already known
            newPassword, // New password entered by the user
          }
        );
        if (response.data.success) {
          alert("Password reset successfully");
          navigate("/login");
        } else {
          alert(response.data.message); // Show error message
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <section className="register_section section_space_lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-5">
            <h1 className="register_heading text-center">Rest Password</h1>
            <p className="register_heading_description text-center">
              Please enter your Email
            </p>
            <form onSubmit={passwordReset ? handlePasswordReset : handleSubmit}>
              <div className="register_form signup_login_form">
                {!passwordReset && (
                  <div className="form_item">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}

                {passwordReset && (
                  <div className="form_item">
                    <p className="text-primary text-center">
                      Your email Exists , Set a New password
                    </p>
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                )}

                <button type="submit" className="btn btn_dark mb-5">
                  <span>
                    <small>
                      {passwordReset ? "Set New Password" : "Reset Password"}
                    </small>
                    <small>
                      {passwordReset ? "Set New Password" : "Reset Password"}
                    </small>
                  </span>
                </button>

                <p className="mb-0 text-center">
                  Return <Link to="/login">Login Page</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPasswordSection;
