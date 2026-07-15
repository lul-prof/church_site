import React from 'react';
import './Home.css'; // Add custom CSS for specific page styles
import heroImage from '../assets/Othro_img_1.webp';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Church community" className="hero-image" />
        <div className="hero-text text-center">
          <h1 className="display-4">Holy Resurrection Orthodox Church</h1>
          <p className="lead">Join us in our spiritual journey, where faith, community, and tradition meet.</p>
        </div>
      </div>

      {/* Home Body Section */}
      <div className='home-body container mt-5'>
        <div className='home-text text-center mb-4'>
          <h2>Welcome!</h2>
          <p>Welcome to Holy Resurrection Orthodox Church located in Fargo, North Dakota. We are so glad you found us in our little corner of the world.</p>
          <a href="/contact" className="btn btn-primary mt-3">Contact Us</a>
        </div>
        <div className="home_services text-center">
          <h3>Our weekly services are on Saturdays at 6pm and Sundays at 10am.</h3>
          <p className="mt-3">Please join us! For a listing of our current activities and services, please refer to the Church Calendar page.</p>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="announcements mt-5">
        <div className="container text-center">
          <h2>Latest Announcements</h2>
          <ul className="list-unstyled mt-4">
            <li>Sunday Service - 10 AM</li>
            <li>Wednesday Evening Bible Study - 7 PM</li>
            <li>Annual Church Picnic - September 24th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

