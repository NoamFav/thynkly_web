import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out with any questions or feedback.</p>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>
              Email:{" "}
              <a href="mailto:noam.favier@thynkly.com">
                noam.favier@thynkly.com
              </a>
            </p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Address: 1234 Knowledge St, Learning City, LT 56789</p>
          </div>
        </div>
      </section>

      {/* Optional Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
