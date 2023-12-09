import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for internal navigation
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"


const Counter = () => {
	return (
        <section className="counter_section bg_light section_space_md">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-3 col-md-6">
              <div className="counter_item">
                <h3 className="counter_value">
                  <span className="counter_value_text">100</span>
                  <span>+</span>
                </h3>
                <p className="mb-0">
                  Organizer
                </p>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6">
              <div className="counter_item">
                <h3 className="counter_value">
                  <span className="counter_value_text">500</span>
                  <span>+</span>
                </h3>
                <p className="mb-0">
                  Event
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
    };

    export default Counter;