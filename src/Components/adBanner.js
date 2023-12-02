import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"
import adImage1 from '../assets/images/advertisement/advertisement_img_1.jpg';
import adImage2 from '../assets/images/advertisement/advertisement_img_2.jpg';
import adImage3 from '../assets/images/advertisement/advertisement_img_3.jpg';
import adImage4 from '../assets/images/advertisement/advertisement_img_4.jpg';
import shapeImg1 from '../assets/images/shape/shape_img_3.png';
import shapeImg2 from '../assets/images/shape/shape_img_3.png'; // Adjust the paths as needed


const AdBanner = () => {
	return (
        <section className="advertisement_section bg_dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-6">
            <div className="section_heading mb-lg-0">
              <h2 className="heading_text text-white">
                Embark on a Journey of Discovery and Connection
              </h2>
              <p className="heading_description mb-0 text-white">
                Step into a world of engaging events that spark both personal growth and professional networking. From cultural soirées to educational workshops, each gathering is a step towards achieving your aspirations. Enrich your life with experiences that matter.
              </p>
              <div className="btn_wrap pb-0">
                <Link to="/event" className="btn btn_primary"> {/* Replace with <a href="..."> if not using React Router */}
                  <span>
                    <small>Explore Events</small>
                    <small>Explore Events</small>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="row images_group decoration_wra">
              <div className="col col-md-6 col-sm-6">
                <div className="image_wrap">
                  <img src={adImage1} alt="Eventup" />
                </div>
                <div className="image_wrap">
                  <img src={adImage2} alt="Eventup" />
                </div>
              </div>
              <div className="col col-md-6 col-sm-6">
                <div className="image_wrap">
                  <img src={adImage3} alt="Eventup" />
                </div>
                <div className="image_wrap">
                  <img src={adImage4} alt="Eventup" />
                </div>
              </div>
              <div className="deco_item shape_img_1">
                <img src={shapeImg1} alt="Eventup" />
              </div>
              <div className="deco_item shape_img_2">
                <img src={shapeImg2} alt="Eventup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
    };

    export default AdBanner;