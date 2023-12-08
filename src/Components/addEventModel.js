import React from "react";
import { Link, Route } from "react-router-dom"; // Import Link from react-router-dom for internal navigation
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import shapeImage from "../assets/images/shape/shape_img_7.png"; // Adjust the path as needed
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEventModal() {
  // event data
  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    price: 0,
    description: "",
    organizer: "",
    start_time: "",
    end_time: "",
    date: "",
    location: "",
    city: "",
    spaces: 0,
  });

  // handle changes on inputs events data
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // submit all data with handling
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (eventData.title.length === 0) {
      alert("Please Enter title");
    } else if (eventData.organizer.length === 0) {
      alert("Please enter Orgnaizer name");
    } else if (eventData.price === 0) {
      alert("Please enter a vaild price");
    } else if (eventData.category === "Category") {
      alert("Please choose a Category");
    } else if (
      eventData.description.length === 0 &&
      eventData.description.length < 3000
    ) {
      alert(
        "Please write a description for your Event , the description should consist of less than 3000 letters "
      );
    } else if (eventData.date === "") {
      alert("Please choose a Date");
    } else if (eventData.start_time === "") {
      alert("Please choose a start time");
    } else if (eventData.end_time === "") {
      alert("Please choose a end time");
    } else if (eventData.location.length === 0) {
      alert("Please Enter the location of the event");
    } else if (eventData.city.length === 0) {
      alert("Please Enter the city name");
    } else if (eventData.spaces === 0) {
      alert("Please choose a number of avaliable spaces");
    } else {
      try {
        const response = await axios.post(
          "http://localhost/eventup/src/php/post_event.php",
          eventData
        );
        console.log(response.data.message);
        alert("Your Event have been added");
        navigate("/");
        setIsSubmitting(false);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Error handling
        setIsSubmitting(false);
      }
    }

    /////////////////////////
    console.log(eventData);
  };

  return (
    <section className="contact_form_section section_space_lg bg_light decoration_wrap overflow-hidden">
      <div className="container decoration_wrap">
        <div className="row justify-content-center">
          <div className="col col-lg-7">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">
                Your Paricpation is Our Success, Add Your Event and earn an
                audiance
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
                    {/* title */}
                    <label htmlFor="input_title" className="input_title">
                      Event Title
                    </label>
                    <input
                      id="input_title"
                      type="text"
                      name="title"
                      placeholder="Your Event Title"
                      value={eventData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Organizer */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_organizer" className="input_title">
                      Organizer name
                    </label>
                    <input
                      id="input_organizer"
                      type="text"
                      name="organizer"
                      placeholder="Enter The Organizer Name"
                      value={eventData.organizer}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_price" className="input_title">
                      Price
                    </label>
                    <input
                      id="input_price"
                      type="number"
                      name="price"
                      placeholder="SAR"
                      value={eventData.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_category" className="input_title">
                      Choose a Category
                    </label>
                    <select
                      name="category"
                      id="input_category"
                      value={eventData.category}
                      onChange={handleChange}
                    >
                      <option value="Category">Choose a Category</option>
                      <option value="ARTS & THEATRE">ARTS & THEATRE</option>
                      <option value="MUSIC & CONCERTS">MUSIC & CONCERTS</option>
                      <option value="SPORTS & WELLNESS">
                        SPORTS & WELLNESS
                      </option>
                      <option value="TECH & INNOVATION">
                        TECH & INNOVATION
                      </option>
                      <option value="WORKSHOPS & EDUCATION">
                        WORKSHOPS & EDUCATION
                      </option>
                      <option value="SOCIAL GATHERING">SOCIAL GATHERING</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div className="col">
                  <div className="form_item">
                    <label htmlFor="input_description" className="input_title">
                      Event Description
                    </label>
                    <textarea
                      id="input_description"
                      name="description"
                      placeholder="Enter a Description"
                      value={eventData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* date*/}
                <div className="col ">
                  <div className="form_item">
                    <label htmlFor="input_date" className="input_title">
                      Choose a date
                    </label>
                    <input
                      id="input_date"
                      type="date"
                      name="date"
                      value={eventData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* start time */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_start_time" className="input_title">
                      Start Time
                    </label>
                    <input
                      id="input_start_time"
                      type="time"
                      name="start_time"
                      value={eventData.start_time}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* end time */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_end_time" className="input_title">
                      End Time
                    </label>
                    <input
                      id="input_end_time"
                      type="time"
                      name="end_time"
                      value={eventData.end_time}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Availavble spaces */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_spaces" className="input_title">
                      Availavble spaces
                    </label>
                    <input
                      id="input_spaces"
                      type="number"
                      name="spaces"
                      placeholder="spaces"
                      value={eventData.spaces}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* City */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_city" className="input_title">
                      City
                    </label>
                    <input
                      id="input_city"
                      type="text"
                      name="city"
                      placeholder="Enter City Name"
                      value={eventData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* location */}
                <div className="col col-md-6">
                  <div className="form_item m-0">
                    <label htmlFor="input_location" className="input_title">
                      Location url
                    </label>
                    <input
                      id="input_location"
                      type="url"
                      name="location"
                      placeholder="Enter Location Url"
                      value={eventData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/*submit button  */}
                <div className="col">
                  <button type="submit" className="btn btn_dark w-100">
                    <span>
                      <small>Add Event</small>
                      <small>Add Event</small>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="deco_item shape_img_1">
          <img src={shapeImage} alt="EVENTUP" />
        </div>
        <div className="deco_item shape_img_2">
          <img src={shapeImage} alt="EVENTUP" />
        </div>
        <div className="deco_item shape_img_3">
          <img src={shapeImage} alt="EVENTUP" />
        </div>
        <div className="deco_item shape_img_4">
          <img src={shapeImage} alt="EVENTUP" />
        </div>
      </div>
    </section>
  );
}

export default AddEventModal;
