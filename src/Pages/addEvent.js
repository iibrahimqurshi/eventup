import Header from "../Components/header";
import ContactForm from "../Components/contactForm";
import ContactSection from "../Components/contactSection";
import Newsletter from "../Components/newsletter";
import Footer from "../Components/footer";
import PageBanner from "../Components/pageBanner";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";
import AddEventModal from '../Components/addEventModel'

const contactDescription =
  "Add your event now";
const title = "Add Event"

const ContactPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <div className="section_space_lg m-5"> </div>
      <PageBanner pageTitle={title} pageDescription={contactDescription} />
      <AddEventModal/>
      
    </div>
  );
};

export default ContactPage;
