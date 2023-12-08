import Header from "../Components/header";
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
			<div className="section_space_lg m-5"> </div>
			<main class="page_content">
                <LoginSection/>
            </main>
			<Footer/>
		</div>
	);
};

export default LoginPage;