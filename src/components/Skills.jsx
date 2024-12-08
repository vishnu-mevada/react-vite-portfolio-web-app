import React from "react";

const Skills = ({ skillsData }) => {
  return (
    <>
      <section id="skills" className="skills">
        <div className="skill-content">
          <div className="section-heading text-center">
            <h2>Skills</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="single-skill-content">
                  {skillsData.map((skill, index) => (
                    <div className="barWrapper col-md-6" key={index}>
                      <span className="progressText">{skill.name}</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={skill.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${skill.value}%` }}
                          ></div>
                        </div>
                        <h3>{skill.value}%</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
