import React from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router
 
 import logo from "../assets/images/site_logo.png"

function Footer() {
  return (
    <footer className="site_footer">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-3">



              <div className="footer_widget">
                <div className="site_logo">
                  <Link to="/"> 
                    <img src={logo} alt="Eventup" />
                  </Link>
                </div>
                
                <p>
                  Discover the heartbeat of Jeddah and Riyadh with Eventup. Our platform connects vibrant events to
                  enthusiastic audiences, celebrating culture, innovation, and
                  community. Join us in exploring and creating unforgettable
                  experiences!
                </p>
                

                <ul className="social_links unordered_list">
                  <li><a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-8 ">
              <div className="row justify-content-center ">

                <div className="col col-md-4 col-sm-1 ">
                  <div className="footer_widget ">
                    <h3 className="footer_widget_title">Links</h3>
                    <ul className="page_list unordered_list_block">
                    <span className='item_icon'>  <li><Link to="/about">Home</Link></li></span>
                    <span className='item_icon'>  <li><Link to="/event">Events</Link></li></span>
                    </ul>
                  </div>
                </div>

                <div className="col col-md-4 col-sm-2">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Support</h3>
                    <ul className="page_list unordered_list_block">
                     <span className='item_icon'> <li><Link to="/contact">Contact us</Link></li></span>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="copyright_widget">
        <div className="container">
          <p className="copyright_text text-center mb-0">
            © <b>Eventup</b> All rights reserved Copyrights 2023
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
