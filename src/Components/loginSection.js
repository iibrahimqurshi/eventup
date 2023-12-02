import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";



function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login functionality here
    console.log('Login with:', { email, password, rememberMe });
  };

  return (
    <section className="register_section section_space_lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-5">
            <h1 className="register_heading text-center">Account Login</h1>
            <p className="register_heading_description text-center">
              Please enter your User/Email & Password
            </p>
            <form onSubmit={handleSubmit}>
              <div className="register_form signup_login_form">
                <div className="form_item">
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form_item">
                  <input
                    type="password"
                    name="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="remenber_forget row mb-3 align-items-center justify-content-between">
                  <div className="col col-6">
                    <div className="checkbox_item mb-0">
                      <input
                        id="checkbox_remenber"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="checkbox_remenber">Remember me</label>
                    </div>
                  </div>
                  <div className="col col-6">
                    <div className="forget_password text-end">
                      <Link to="/forget-password">Forget Password</Link> {/* Replace with <a href="#!"> if not using React Router */}
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn_dark mb-5">
                  <span>
                    <small>Login Now</small>
                    <small>Login Now</small>
                  </span>
                </button>
                <p className="mb-0 text-center">
                  don't have an account? <Link to="/signup">Register Here</Link> {/* Replace with <a href="signup.html"> if not using React Router */}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginSection;