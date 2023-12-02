import React from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router
 // Adjust the path as needed

function Footer() {
  return (
    <footer className="site_footer">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col col-rg-3 col-md-6 col-sm-6">
              <div className="footer_widget">
                <div className="site_logo">
                  <Link to="/"> {/* Replace with <a href="index.html"> if not using React Router */}
                    <img src={"#"} alt="Eventup" />
                  </Link>
                </div>
                <p>
                  Discover the heartbeat of Jeddah and Riyadh with Eventup. Our platform connects vibrant events to
                  enthusiastic audiences, celebrating culture, innovation, and
                  community. Join us in exploring and creating unforgettable
                  experiences!
                </p>
                <ul className="social_links unordered_list">
                  <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#!"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#!"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="row">
                <div className="col col-md-4 col-sm-4">
                  <div className="footer_widget">
                    <h3 className="footer_widget_title">Links</h3>
                    <ul className="page_list unordered_list_block">
                    <span className='item_icon'>  <li><Link to="/about">Home</Link></li></span>
                    <span className='item_icon'>  <li><Link to="/event">Events</Link></li></span>
                      
                    </ul>
                  </div>
                </div>
                <div className="col col-md-4 col-sm-4">
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
