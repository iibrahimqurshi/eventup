import Header from "../Components/header";
import ContactForm from "../Components/contactForm";
import ContactSection from "../Components/contactSection";
import Newsletter from "../Components/newsletter";
import Footer from "../Components/footer";
import PageBanner from "../Components/pageBanner";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/animate.css";
import "../css/fontawesome.css";
import "../App.css";

const contactDescription =
  "Get in touch with us on our Contact Page! At Eventup, we're here to assist you with any inquiries or feedback. Connect with our team for prompt and helpful support, tailored to your needs.";
const title = "Contact us"

const ContactPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <PageBanner pageTitle={title} pageDescription={contactDescription} />
      <ContactSection />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ContactPage;
