import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"
import bannerWhatToExpect from '../assets/images/banner/BannerWhatToExpect.png'; // Adjust the path
import iconAcademicCap from '../assets/images/service/icon_academic_cap.svg'; // Adjust the path
import iconPhysics from '../assets/images/service/icon_physics.svg'; // Adjust the path
import iconCommunication from '../assets/images/service/icon_communication.svg'; // Adjust the path
import iconDiploma from '../assets/images/service/icon_diploma.svg'; // Adjust the path


const ExpectFromUs = () => {
	return (
        <section className="expect_from_event section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <div className="section_heading">
              <h2 className="heading_text">
                What to Expect from Our Event Platform
              </h2>
              <p className="heading_description mb-0">
                Immerse yourself in the world of events. Our platform is your gateway to diverse happenings in the
                city. From arts and culture to business and networking - the experiences are limitless.
              </p>
            </div>

            <div className="image_widget">
              <img src={bannerWhatToExpect} alt="Eventup" />
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="btn_wrap pt-0 d-none d-lg-flex justify-content-end">
              <Link to="/event" className="btn border_dark">
                <span>
                  <small>Explore Events</small>
                  <small>Explore Events</small>
                </span>
              </Link>
            </div>

            <div className="row">
              <div className="col col-md-6">
                <div className="service_item">
                  <div className="item_icon">
                    <img src={iconAcademicCap} alt="Eventup" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Diverse Events</h3>
                    <p className="mb-0">
                      Explore a curated selection of gatherings that cater to all interests and passions. From local
                      art exhibitions to major business conferences, there's something for everyone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-md-6">
                <div className="service_item">
                  <div className="item_icon">
                    <img src={iconPhysics} alt="Eventup" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Easy Navigation</h3>
                    <p className="mb-0">
                      Our user-friendly interface provides effortless browsing. Find events by date, category, or city
                      with just a few clicks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-md-6">
                <div className="service_item">
                  <div className="item_icon">
                    <img src={iconCommunication} alt="Eventup" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Community Engagement</h3>
                    <p className="mb-0">
                      Connect with fellow event-goers and organizers. Share your experiences, leave feedback, and
                      become part of a community that values every occasion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-md-6">
                <div className="service_item">
                  <div className="item_icon">
                    <img src={iconDiploma} alt="Eventup" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">Secure Bookings</h3>
                    <p className="mb-0">
                      Reserve your spot at any event with ease and confidence. Our secure booking system ensures your
                      information is protected every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn_wrap pb-0 d-block d-lg-none text-center">
              <Link to="/event" className="btn border_dark">
                <span>
                  <small>Explore Events</small>
                  <small>Explore Events</small>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    )

    };

    export default ExpectFromUs