import React, { useState ,useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Import only if using React Router
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import axios from "axios";
import { AuthContext } from './AuthContext';




function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost/eventup/src/php/login.php', {
        email,
        password
      });
      console.log(response.data);
      if (response.data.success) {
        login(); // Update authentication state
        alert("You have successfully logged in , you will be directed to the homepage")
       navigate('/')
      } else {
        alert("Your log in has been failed , Try Again")
        navigate('/login')
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error
    }
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
                    <div className="forget_password text-end">
                      <Link to="/forget_password">Forget Password</Link> 
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
                  don't have an account? <Link to="/signup">Register Here</Link> 
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