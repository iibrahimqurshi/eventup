import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"
import bannerImage from '../assets/images/banner/bannerHomepage.png'; // Adjust the path as per your project structure
import shapeImg1 from '../assets/images/shape/shape_img_1.png'; // Adjust the path
import shapeImg2 from '../assets/images/shape/shape_img_2.png'; // Adjust the path



const HeroBanner = () => {
	return (
        <section className="hero_banner style_1">
        <div className="container">
          <div className="content_wrap">
            <div className="row">
              <div className="col col-lg-7">
                <h1 className="banner_small_title">New Horizons</h1>
                <h2 className="banner_big_title">Explore Events in Your City</h2>
                <p className="banner_description">
                  Discover a world of events at your fingertips! From exhilarating social gatherings to informative
                  workshops and vibrant festivals, find your next unforgettable experience. Whether you're a local or
                  just visiting, join us in celebrating the pulse of the city. Don’t miss out - your new adventure
                  awaits.
                </p>
                <ul className="banner_btns_group unordered_list">
                  <li>
                    <Link to="/event" className="btn btn_primary"> {/* Change to <a href="..."> if not using React Router */}
                      <span>
                        <small>Explore Events</small>
                        <small>Explore Events</small>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-5">
                <div className="banner_image_1 decoration_wrap">
                  <div className="image_wrap">
                    <img src={bannerImage} alt="Collab – Online Learning Platform" />
                  </div>
  
                  <div className="deco_item shape_img_1">
                    <img src={shapeImg1} alt="Collab – Online Learning Platform" />
                  </div>
                  <div className="deco_item shape_img_2">
                    <img src={shapeImg2} alt="Collab – Online Learning Platform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
		
  )
};

export default HeroBanner;