import React from 'react';
import { Link } from 'react-router-dom'; // Import only if using React Router

function EventDetailsBanner({event}) {
  // You can also manage dynamic data passed into this component via props or context if needed
  return (
    <section className="page_banner">
      <div className="container">
        <div className="content_wrapper">
          <div className="row align-items-center">
            <div className="col col-lg-7">
              <ul className="breadcrumb_nav unordered_list">
                <li><Link to="/">Home</Link></li> {/* Replace with <a href="index.html"> if not using React Router */}
                <li><Link to="/event">{event.title}</Link></li> {/* Replace with <a href="event.html"> if not using React Router */}
                <li>Event Details</li>
              </ul>
              <h1 className="page_title">
              {event.category}
              </h1>
              <ul className="info_list unordered_list_block pb-0">
                <li>
                  <i className="fas fa-check"></i>
                  <span>
                  Unwind and create art in a relaxed, social setting.
                  </span>
                </li>
            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetailsBanner;
