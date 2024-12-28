import React from 'react';

const About = ({ profileData }) => {
  return (
    <section id="about" className="about">
      <div className="section-heading text-center">
        <h2>{profileData.title}</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>{profileData.descriptionTitle}</h3>
                <p>{profileData.descriptionText}</p>
                <div className="row">
                  {profileData.contactInfo.map((contact, index) => (
                    <div key={index} className={contact.type === 'website' ? 'col-sm-12' : 'col-sm-6'}>
                      <div className="single-about-add-info">
                        <h3>{contact.label}</h3>
                        <p>
                          <a
                            href={
                              contact.type === 'phone'
                                ? `tel:${contact.value}`
                                : contact.type === 'email'
                                ? `mailto:${contact.value}`
                                : contact.value
                            }
                            target={contact.type === 'website' ? '_blank' : ''}
                            rel={contact.type === 'website' ? 'noopener noreferrer' : ''}
                          >
                            {contact.display}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src={profileData.profileImage} alt="profile_image" />
                <div className="about-list-icon">
                  <ul>
                    {profileData.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <i className={`fa ${link.icon}`} aria-hidden="true"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;