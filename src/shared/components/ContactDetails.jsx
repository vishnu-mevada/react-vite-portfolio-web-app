import React from "react";

const ContactDetails = ({ contactDetails }) => {
  return (
    <>
      <div className="single-contact-box">
        <div className="contact-adress">
          <div className="contact-add-head">
            <h3>{contactDetails.name}</h3>
            <p>{contactDetails.title}</p>
          </div>
          <div className="contact-add-info">
            {contactDetails.contactInfo.map((info, index) => (
              <div key={index} className="single-contact-add-info">
                <h3>{info.label}</h3>
                <p>
                  <a
                    href={
                      info.type === "phone"
                        ? `tel:${info.value}`
                        : info.type === "email"
                        ? `mailto:${info.value}`
                        : info.value
                    }
                    target={info.type === "website" ? "_blank" : ""}
                    rel={info.type === "website" ? "noopener noreferrer" : ""}
                  >
                    {info.display}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="hm-foot-icon">
          <ul>
            {contactDetails.socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
