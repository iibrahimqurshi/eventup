import React , {useState,useEffect}from "react";
import { Link , useNavigate} from "react-router-dom"; // Import only if using React Router
import eventImage from "../assets/images/event/event_details_image_1.png"; 
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import axios from "axios";


function EventInfoCard({event}) {

  const navigate = useNavigate();
  const handleDelete = () => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this event?");

    if (isConfirmed) {
        // User clicked 'OK', proceed with deletion
        deleteEvent(event.ID);
    } else {
        // User clicked 'Cancel', do nothing
        console.log("Deletion cancelled.");
    }
};

const deleteEvent = async (eventid) => {
  try {
      const response = await axios.delete(`http://localhost/eventup/src/php/delete_event.php?ID=${eventid}`);
      if (response.data.success) {
          alert("Event deleted successfully");
          navigate('/');
      } else {
          alert("Failed to delete event");
      }
  } catch (error) {
      console.error("Error deleting event:", error);
  }
};

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
            <button className="btn btn_primary m-5 w-75 " onClick={handleDelete}>
                    <span>
                      <small>Delete Event</small>
                      <small>Delete Event</small>
                    </span>
                  </button>
          </div>
          
        </div>
        
      </div>
      
    </section>
  )

  



  
};

export default EventInfoCard;
