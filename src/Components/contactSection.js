import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"


const ContactSection = () => {
	return (
        <section className="contact_section section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-5">
            <div className="pe-lg-5">
              <div className="section_heading">
                <h2 className="heading_text">
                  Contact Us
                </h2>
                <p className="heading_description mb-0">
                  Viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus purus in massa tempor nec feugiat nisl
                </p>
              </div>
              <div className="iconbox_item contact_info_iconbox">
                <div className="item_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Call Us</h3>
                  <p className="mb-0">(966) 549947405</p>
                </div>
              </div>
              <div className="iconbox_item contact_info_iconbox">
                <div className="item_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Email Address</h3>
                  <p className="mb-0">info@eventup.com</p>
                  <p className="mb-0">eventup-support@eventup.com</p>
                </div>
              </div>
              <div className="iconbox_item contact_info_iconbox">
                <div className="item_icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Reach Us</h3>
                  <p className="mb-0">King abdulaziz university</p>
                  <p className="mb-0">Jeddah Saudi Arabia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-7">
            <div className="gmap_canvas">
              <iframe 
                id="gmap_canvas_iframe" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.9285261182476!2d39.2462998753978!3d21.489744914624687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cdd04c4fdbdb%3A0x35ee14823ccc4d54!2sFaculty%20of%20Computing%20and%20Information%20Technology%20-%20Males&#39;%20Section!5e0!3m2!1sen!2ssa!4v1701392499513!5m2!1sen!2ssa"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
    };

    export default ContactSection;