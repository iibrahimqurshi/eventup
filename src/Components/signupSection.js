import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";


function RegisterSection() {
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration functionality here
    console.log('Register with:', { email, createPassword, confirmPassword });
    // Validation and API calls go here
  };

  return (
    <section className="register_section section_space_lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-5">
            <h1 className="register_heading text-center">Create Account</h1>
            <p className="register_heading_description text-center">
              Already have account? <Link to="/login">Login</Link> 
            </p>
            <form onSubmit={handleSubmit}>
              <div className="register_form signup_login_form">
                <div className="form_item">
                  <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form_item">
                  <input type="password" name="createpassword" placeholder="Create Password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} />
                </div>
                <div className="form_item">
                  <input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn_dark mb-5">
                  <span>
                    <small>Signup Now</small>
                    <small>Signup Now</small>
                  </span>
                </button>

                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
