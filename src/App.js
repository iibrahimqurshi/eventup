import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage.js';
import Event from './Pages/event.js';
import LoginPage from './Pages/login.js';
import SignupPage from './Pages/signup.js';
import EventDetails from './Pages/eventDetails.js';
import ContactPage from './Pages/contact.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"
import "./css/animate.css"
import "./css/fontawesome.css"
function App() {
  return (
    <>
			<Router>
				<Routes>
					<Route exact path='/' element={<HomePage/>} />
					<Route exact path='/events' element={<Event/>} />
					<Route exact path='/login' element={<LoginPage/>} />
					<Route exact path='/signup' element={<SignupPage />} />
					<Route exact path='/event_details' element={<EventDetails />} />
					<Route exact path='/contact' element={<ContactPage/>}/>
				</Routes>
			</Router>
		</>
  );
}

export default App;
