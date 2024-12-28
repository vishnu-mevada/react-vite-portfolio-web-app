import React from "react";
import { ContactForm, ContactDetails } from "../shared/components/index";
import constants from "../constants.json";

const Contact = () => {
  const contactDetails = constants.contactDetails;

  return (
    <>
      <section id="contact" className="contact">
        <div className="section-heading text-center">
          <h2>Contact Me</h2>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="row">
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <ContactForm />
              </div>
              <div className="col-md-offset-1 col-md-5 col-sm-6">
                <ContactDetails contactDetails={contactDetails} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
