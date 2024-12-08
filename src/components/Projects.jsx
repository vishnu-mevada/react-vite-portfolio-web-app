import React from "react";

const Projects = ({ projectData }) => {
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>Portfolio</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">
                  {projectData.map((project, index) => (
                    <div className="col-sm-4" key={index}>
                      <div className="item">
                        <img src={project.image} alt={`${project.category}`} />
                        <div className="isotope-overlay">
                          <a>{project.category}</a>
                        </div>
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

export default Projects;
