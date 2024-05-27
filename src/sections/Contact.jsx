import React from "react";
import "../style/contact.css";

function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="container-contact">
        <h1 className="title-contact">Get in Touch!</h1>
        <div className="details-contact">
          <a
            className="email-address"
            href="https://calendly.com/upvisionmedia/first-call"
          >
            let's start a project
          </a>
          <a className="phone-number" href="tel:+40758256552">
            call us
          </a>
          <div className="other-emails">
            <a
              className="email-address-support"
              href="mailto:support@upvisionmedia.com"
            >
              Support
            </a>
            <a
              className="email-address-billing"
              href="mailto:billing@upvisionmedia.com"
            >
              Billing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
