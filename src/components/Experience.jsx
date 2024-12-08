import React from "react";

const Experience = ({ experienceData }) => {
  return (
    <>
      <section id="experience" className="experience">
        <div className="section-heading text-center">
          <h2>Experience</h2>
        </div>
        <div className="container">
          <div className="experience-content">
            <div className="main-timeline">
              <ul>
                {experienceData.map((exp, index) => (
                  <li key={index}>
                    <div className="single-timeline-box fix">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="experience-time text-right">
                            <h2>{exp.duration}</h2>
                            <h3>{exp.title}</h3>
                          </div>
                        </div>
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span>
                                  <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                                {exp.company}
                              </h4>
                              <h5>{exp.location}</h5>
                              <p className="description">{exp.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
