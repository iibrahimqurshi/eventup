import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Only if using React Router
import bannerImage from '../assets/images/banner/page_banner_image.png'; // Adjust the path as needed

function PageBanner({$pageTitle},{$pageDescription}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality or redirect as needed
    console.log('Searching for:', searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="page_banner">
      <div className="container">
        <div className="content_wrapper" style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <ul className="breadcrumb_nav unordered_list">
                <li><Link to="/">Home</Link></li> 
                <li>{$pageTitle}</li>
              </ul>
              <h1 className="page_title">{$pageTitle}</h1>
              <p className="page_description">
              {$pageDescription} he
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageBanner;
