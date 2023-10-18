import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <div className="section-contact" id="contact">
      <div className="container-contact">
        <h1 className="title-contact">Get in Touch!</h1>
        <div className="details-contact">
          <a className="email-address" href="mailto:info@upvisionmedia.com">
            email us
          </a>
          <a href="tel:+40744497740">call us</a>
          <div className="mail-to-owners">
            <a
              className="email-address-alex"
              href="mailto:a.stanciu@upvisionmedia.com">
              Alex
            </a>
            <a
              className="email-address-razvan"
              href="mailto:r.tache@upvisionmedia.com">
              Razvan
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
