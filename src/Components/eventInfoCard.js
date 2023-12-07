import React , {useState,useEffect}from "react";
import { Link } from "react-router-dom"; // Import only if using React Router
import eventImage from "../assets/images/event/event_details_image_1.jpg"; 
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
function EventInfoCard({event}) {

 



  return (
    <section className="details_section event_details_section">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8">
            <div className="section_space_lg pb-0">
              <div className="pe-lg-5">
                <div className="details_content">
                  <h3 className="details_info_title">Event Description</h3>
                  <p>
                    {event.description}
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <aside className="sidebar d-none d-lg-block">
              <div className="event_info_card">
                <div className="details_image">
                  <img src={eventImage} alt="Eventup" />
                </div>
                <div className="item_price">
                    <span className="sale_price">{event.price} SAR</span>
                    
                  </div>
                <a href="#" className="btn btn_dark">
                    <span>
                      <small>Buy ticket</small>
                      <small>Buy ticket</small>
                    </span>
                  </a>
                  <ul className="event_info_list unordered_list_block">
                    <li>
                      <span><i className="fas fa-user"></i> Created by</span>
                      <strong> {event.organizer}</strong>
                    </li>
                    <li>
                      <span><i className="fas fa-users"></i> Available Space</span>
                      <strong>{event.spaces} Spaces</strong>
                    </li>
                    <li>
                      <span><i className="fas fa-clock"></i> Time</span>
                    <strong>{event.start_time} - {event.end_time} </strong>
                    </li>
                    <li>
                      <span><i className="fas fa-calendar"></i> Date</span>
                    <strong>{event.date}</strong>
                    </li>
                    <li>
                      <span> <i className="fas fa-location"></i>Location</span>

                    <span style={{color:"black",textDecoration:"underline"}}> <a href={event.location}>Open in Google Maps</a></span>
                    
                    </li>
                    <li>
                      <span> <i className="fas fa-city"></i> City</span>
                      <span>{event.city}</span>
                    </li>
                  </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
      
    </section>
  )
};

export default EventInfoCard;
