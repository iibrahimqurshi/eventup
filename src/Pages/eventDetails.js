import Header from "../Components/header";
import HeroBanner from "../Components/heroBanner";
import ExpectFromUs from "../Components/expectFromUs";
import Counter from "../Components/counter";
import EventSection from "../Components/eventSection";
import AdsBanner from "../Components/adBanner";
import EventInfoCard from "../Components/eventInfoCard";
import Footer from "../Components/footer";
import EventDetailsBanner from "../Components/eventDetailsBanner";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";

const EventDetails = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="page_content">
        <EventDetailsBanner />
        <EventInfoCard />
        
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;
