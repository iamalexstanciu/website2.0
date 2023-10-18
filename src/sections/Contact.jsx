import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <div className="section-contact" id="contact">
      <div className="container-contact">
        <h1 className="title">Get in Touch!</h1>
        <div className="details-contact">
          <a className="email-address" href="mailto:info@upvisionmedia.com">
            info@upvisionmedia.com
          </a>
          <a href="tel:+40744497740">Call us!</a>
          <div className="mail-to-owners">
            <a
              className="email-address-alex"
              href="mailto:a.stanciu@upvisionmedia.com">
              a.stanciu@upvisionmedia.com
            </a>
            <a
              className="email-address-razvan"
              href="mailto:r.tache@upvisionmedia.com">
              r.tache@upvisionmedia.com
            </a>
          </div>
          <div className="other-emails">
            <a
              className="email-address-razvan"
              href="mailto:support@upvisionmedia.com">
              Support
            </a>
            <a
              className="email-address-razvan"
              href="mailto:billing@upvisionmedia.com">
              Billing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
