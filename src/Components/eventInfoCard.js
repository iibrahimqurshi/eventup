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
                    Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sapien pellentesque habitant morbi tristique senectus et netus. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Massa sed elementum tempus egestas sed. Sed id semper risus in hendrerit gravida rutrum quisque.
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
                    <span className="sale_price">150 SAR</span>
                    <del className="remove_price">200 SAR</del>
                  </div>
                <a href="#" className="btn btn_dark">
                    <span>
                      <small>Buy ticket</small>
                      <small>Buy ticket</small>
                    </span>
                  </a>
                  <ul className="event_info_list unordered_list_block">
                    <li>
                      <span><i className="fas fa-user"></i> Created</span>
                      <strong>Ibrahim alqurshi</strong>
                    </li>
                    <li>
                      <span><i className="fas fa-users"></i> Available Space</span>
                      <strong>40 Spaces</strong>
                    </li>
                    <li>
                      <span><i className="fas fa-clock"></i> Time</span>
                      <strong>8:00pm - 11:00pm</strong>
                    </li>
                    <li>
                      <span><i className="fas fa-calendar"></i> Date</span>
                      <strong>12/29/2023</strong>
                    </li>
                    <li>
                      <span> <i className="fas fa-location"></i>Location</span>
                      <span>7057 Cornishe, Hilton</span>
                    </li>
                    <li>
                      <span> <i className="fas fa-city"></i> City</span>
                      <span>Jeddah</span>
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
