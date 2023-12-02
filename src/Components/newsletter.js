import React, { useState } from 'react';
import backgroundImage from '../assets/images/shape/shape_img_6.svg'; // Ensure the path is correct

function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to add email to the database or send to an API
    console.log('Subscribed with:', email);
    // Reset the email field or provide feedback to the user
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
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
                  <input type="email" name="email" placeholder="Your Email" value={email} onChange={handleChange} />
                  <button type="submit" className="btn btn_dark">
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