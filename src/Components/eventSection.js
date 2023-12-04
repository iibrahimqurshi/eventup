import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for internal navigation
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";

import eventImage from "../assets/images/event/event_details_image_1.jpg"; // Adjust path as needed

const EventSection = () => {
  return (
    <section className="events_section section_space_lg">
      <div className="container">
        <div className="section_heading">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col col-lg-6">
              <h2 className="heading_text mb-0">Top-Picked Events</h2>
            </div>

            <div className="col col-lg-5">
              <p className="heading_description mb-0 text-lg-end">
                Embark on a journey of discovery and entertainment with our
                handpicked selection of city events. From the inspiring to the
                innovative, find your next unforgettable experience.
              </p>
            </div>


            <div className="col col-lg-2">
              <div className="btn_wrap p-0 d-none d-lg-flex justify-content-center"></div>
              <Link className="btn_unfill" to="/addEvent" >
              <a className="btn border_dark">
                <span>
                  <small> Add Event</small>
                  <small> Add Event</small>
                </span>
              </a>
              </Link>
            </div>

          </div>
        </div>

        <div className="tabs_wrapper">
          <ul className="nav" role="tablist">
            <li role="presentation">
              <button
                className="active"
                data-bs-toggle="tab"
                data-bs-target="#teb_all"
                type="button"
                role="tab"
                aria-selected="true"
              >
                <span>All</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#teb_arts"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="fas fa-palette"></i>
                <span>ARTS & THEATRE</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#teb_music"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="fas fa-music"></i>
                <span>MUSIC & CONCERTS</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#teb_sports"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="fas fa-chart-network"></i>
                <span>SPORTS & WELLNESS</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#teb_tech"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="fas fa-lightbulb-on"></i>
                <span>TECH & INNOVATION</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#teb_education"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="fas fa-palette"></i>
                <span>WORKSHOPS & EDUCATION</span>
              </button>
            </li>
            <li role="presentation">
              <button
                data-bs-toggle="tab"
                data-bs-target="#teb_social"
                type="button"
                role="tab"
                aria-selected="false"
              >
                <i class="fas fa-users"></i>
                <span>SOCIAL GATHERING</span>
              </button>
            </li>
          </ul>

          <EventCard />
        </div>
      </div>
    </section>
  );
};

function EventCard() {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="teb_all" role="tabpanel">
        <div className="row">
          <div className="col col-lg-4">
            <div className="event_card">
              <div className="item_image">
                <Link to="/event-details">
                  {" "}
                  {/* Replace with <a href="..."> if not using React Router */}
                  <img src={eventImage} alt="Eventup" />
                </Link>
              </div>
              <div className="item_content">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <ul className="item_category_list unordered_list">
                    <li>
                      <Link to="#">ARTS & THEATRE</Link>
                    </li>{" "}
                    {/* Replace with <a href="..."> if not using React Router */}
                  </ul>
                  <div className="item_price">
                    <span className="sale_price">150 SAR</span>
                  </div>
                </div>
                <ul className="meta_info_list unordered_list">
                  <li>
                    <i class="fas fa-user"></i>
                    <span>Ibrahim alqurshi</span>
                  </li>
                  <li>
                    <i class="fas fa-users"></i>
                    <span> 40 Spaces</span>
                  </li>
                  <li>
                    <i class="fas fa-clock"></i>
                    <span>8:00pm - 11:00pm</span>
                  </li>
                  <li>
                    <i class="fas fa-calendar"></i>
                    <span>12/29/2023</span>
                  </li>
                  <li>
                    <i class="fas fa-location"></i>
                    <span>7057 Cornishe, Hilton</span>
                  </li>
                  <li>
                    <i class="fas fa-city"></i>
                    <span>Jeddah</span>
                  </li>
                </ul>

                <h3 className="item_title">
                  <Link to="/event_details">Canvas & Cocktails</Link>{" "}
                  {/* Replace with <a href="..."> if not using React Router */}
                  <p className="small">
                    Unwind and create art in a relaxed, social setting.
                  </p>
                </h3>
                <h3 className="details_info_title hidden">Event Description</h3>
                <p className="hidden">
                  Sagittis id consectetur purus ut faucibus pulvinar elementum
                  integer. Sapien pellentesque habitant morbi tristique senectus
                  et netus. Gravida in fermentum et sollicitudin ac orci
                  phasellus egestas. Vulputate sapien nec sagittis aliquam
                  malesuada bibendum arcu vitae. Massa sed elementum tempus
                  egestas sed. Sed id semper risus in hendrerit gravida rutrum
                  quisque
                </p>

                <Link className="btn_unfill" to="/event_details">
                  {" "}
                  {/* Replace with <a href="..."> if not using React Router */}
                  <span className="btn_text">View Event</span>
                  <span className="btn_icon">
                    <i class="fas fa-long-arrow-right"></i>
                    <i class="fas fa-long-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
