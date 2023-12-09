import Header from "../Components/header";
import Footer from "../Components/footer"
import SignupSection from "../Components/signupSection"
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"


const SignupPage = () => {
	return (
		<div className="page_wrapper">
			<Header/>
			<div className="section_space_lg m-0"> </div>
			<main class="page_content">
            <SignupSection/>
            </main>
			<Footer/>



		</div>
	);
};

export default SignupPage;