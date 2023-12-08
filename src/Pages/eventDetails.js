import Header from "../Components/header";
import EventInfoCard from "../Components/eventInfoCard";
import Footer from "../Components/footer";
import EventDetailsBanner from "../Components/eventDetailsBanner";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams(); // Get the event ID from URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details from the backend
    axios
      .get(`http://localhost/eventup/src/php/get_event_id.php?ID=${eventId}`)
      .then((response) => {
        if (response.data.success) {
          setEvent(response.data.event);
        } else {
          console.error(
            "Failed to fetch event details:",
            response.data.message
          );
        }
      })
      .catch((error) => console.error("Error fetching event details:", error));
  }, [eventId]);

  return (
    event && (
      <div className="page_wrapper">
        <Header />
        <div className="section_space_lg m-5"> </div>

        <main className="page_content">
          <EventDetailsBanner event={event} />
          <EventInfoCard event={event} />
        </main>
        <Footer />
      </div>
    )
  );
};

export default EventDetails;
