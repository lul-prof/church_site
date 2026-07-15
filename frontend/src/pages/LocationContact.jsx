import React from 'react';
import './LocationContact.css';
import "bootstrap/dist/css/bootstrap.min.css";

const LocationContact = () => {
  return (
    <div className="container mt-5">
      <h1>Location & Contact</h1>
      <div className="contact-info">
        <p>You can find us at:</p>
        <p><strong>123 Church St, Fargo, ND 58103</strong></p>
        <p>Phone: (701) 123-4567</p>
        <p>Email: contact@orthodoxfargo.org</p>
      </div>
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default LocationContact;
