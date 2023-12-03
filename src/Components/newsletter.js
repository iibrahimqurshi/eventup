import React, { useState , props} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/shape/shape_img_6.svg'; // Ensure the path is correct

function NewsletterSection() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate(); 
 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if(email.length === 0){
      alert("Please enter your email to subscribe");
     }else{
      try {
        const response = await axios.post(
          "http://localhost/eventup/src/php/post_newletter.php",
          {email}
        );
        console.log(response.data.message);
        setEmail("")
        navigate('/')
        setIsSubmitting(false);
        alert("Thank you for registering to our newsletter");
        
      } catch (error) {
        console.error("Error submitting form:", error);
      
      }finally{
        setIsSubmitting(false);
        
      }
    }
    
  };

  return (
    <section className="newslatter_section">
      <div className="container">
        <div className="newslatter_box" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="row justify-content-center">
            <div className="col col-lg-6">
              <div className="section_heading text-center">
                <h2 className="heading_text">
                  Subscribe Now Forget 20% Discount Every Event
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form_item m-0">
                  <input type="email" name="email" placeholder="Your Email" value={email} onChange={handleChange}  />
                  <button type="submit" className="btn btn_dark" disabled={isSubmitting}>
                    <span>
                      <small>Subscribe</small>
                      <small>Subscribe</small>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;