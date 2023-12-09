import Header from "../Components/header";
import Footer from "../Components/footer"
import ForgetPasswordSection from "../Components/forgetPasswordSection"
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/animate.css"
import "../css/fontawesome.css"
import "../App.css"


const ForgetPasswordPage = () => {
	return (
		<div className="page_wrapper">
			<Header/>
			<div className="section_space_lg m-5"> </div>
			<main class="page_content">
                <ForgetPasswordSection/>
            </main>
			<Footer/>
		</div>
	);
};

export default ForgetPasswordPage;