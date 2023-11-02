import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="container-contact">
        <h1 className="title-contact">Get in Touch!</h1>
        <div className="details-contact">
          <a className="email-address" href="mailto:info@upvisionmedia.com">
            let's start a project
          </a>
          <a href="tel:+40744497740">call us</a>
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
    </section>
  );
}

export default Contact;
