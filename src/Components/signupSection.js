import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import { AuthContext } from './AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function RegisterSection() {
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCreatePassword = (e) => {
    setCreatePassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!validatePassword(createPassword)) {
      alert('Password must be at least 8 characters long, include a number, an uppercase letter, and a special character');
      return;
    }

    if (createPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost/eventup/src/php/signup.php', {
        email,
        password: createPassword
      });
      console.log(response.data);
      if (response.data.success) {
        login(); // Update authentication state
        alert("You have successfully signed up")
       navigate('/')
      } else {
        alert("Your sign up has been failed , Try Again")
        navigate('/signup')
      }
      
      // Handle post signup actions like redirection or displaying a success message
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error
    }
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
                  <input type="email" name="email" placeholder="Email" value={email} onChange={handleChangeEmail} />
                </div>
                <div className="form_item">
                  <input type="password" name="createpassword" placeholder="Create Password" value={createPassword} onChange={handleChangeCreatePassword} />
                </div>
                <div className="form_item">
                  <input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleChangeConfirmPassword}  />
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
