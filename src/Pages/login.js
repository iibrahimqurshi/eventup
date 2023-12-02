import Header from "../Components/header";
import HeroBanner from "../Components/heroBanner";
import ExpectFromUs from "../Components/expectFromUs";
import Counter from "../Components/counter";
import EventSection from "../Components/eventSection"
import AdsBanner from "../Components/adBanner"
import Newsletter from "../Components/newsletter"
import Footer from "../Components/footer"
import LoginSection from "../Components/loginSection"
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"


const LoginPage = () => {
	return (
		<div className="page_wrapper">
			<Header/>
			<main class="page_content">
                <LoginSection/>
            </main>
			<Footer/>
		</div>
	);
};

export default LoginPage;