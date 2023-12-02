import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"
import shapeImage from '../assets/images/shape/shape_img_7.png'; // Adjust the path as needed
import { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        subject: 'subject',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Implement the submission logic here
        console.log(formData);
      };
    
      return (
        <section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
          <div className="container decoration_wrap">
            <div className="row justify-content-center">
              <div className="col col-lg-7">
                <div className="section_heading text-center">
                  <h2 className="heading_text mb-0">
                    Contact Our Support Team to Know What You Want
                  </h2>
                </div>
              </div>
            </div>
    
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                <div className="col col-lg-8">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_name" className="input_title">Name</label>
                        <input 
                          id="input_name" 
                          type="text" 
                          name="name" 
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_email" className="input_title">Email</label>
                        <input 
                          id="input_email" 
                          type="email" 
                          name="email" 
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_phone" className="input_title">Phone</label>
                        <input 
                          id="input_phone" 
                          type="tel" 
                          name="telephone" 
                          placeholder="Your Phone"
                          value={formData.telephone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item m-0">
                        <label htmlFor="input_subject" className="input_title">Subject</label>
                        <select 
                          name="subject" 
                          id="input_subject"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="subject">Choose Subject</option>
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form_item">
                        <label htmlFor="input_message" className="input_title">Message</label>
                        <textarea 
                          id="input_message" 
                          name="message" 
                          placeholder="Type Your Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn_dark w-100">
                        <span>
                          <small>Send Your Message</small>
                          <small>Send Your Message</small>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
    
            <div className="deco_item shape_img_1">
              <img src={shapeImage} alt="Collab – Online Learning Platform" />
            </div>
            <div className="deco_item shape_img_2">
              <img src={shapeImage} alt="Collab – Online Learning Platform" />
            </div>
            <div className="deco_item shape_img_3">
              <img src={shapeImage} alt="Collab – Online Learning Platform" />
            </div>
            <div className="deco_item shape_img_4">
              <img src={shapeImage} alt="Collab – Online Learning Platform" />
            </div>
          </div>
        </section>
      )
    };

    export default ContactForm;