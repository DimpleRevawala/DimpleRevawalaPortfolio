import React from "react";

const Services = () => {
  return (
    <>
      <section
        data-scroll-index="1"
        className="section services-section bg-gray"
      >
        <div className="container">
          <div className="row section-heading justify-content-center">
            <div className="col-lg-6 text-center">
              <h3>
                <span>What I can do</span>
              </h3>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="feature-box-01 bg-1">
                <div className="icon">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Website Design</h5>
                  <p>
                    I can offer website design services where I create visually
                    appealing, user-friendly interfaces that are optimized for
                    different devices and screen sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-2">
                <div className="icon">
                  <i className="fa fa-code" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Frontend development</h5>
                  <p>
                    I can offer frontend development services where I use HTML,
                    CSS, and JavaScript to create responsive, dynamic, and
                    interactive websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-3">
                <div className="icon">
                  <i className="fa fa-file-code" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Website optimization</h5>
                  <p>
                    I can offer website optimization services where I analyze
                    and improve website performance, load times, and user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-4">
                <div className="icon">
                  <i className="fa fa-object-group" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>UI/UX design</h5>
                  <p>
                    I can offer user interface and user experience design
                    services where I create intuitive, easy-to-use interfaces
                    that help users achieve their goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-5">
                <div className="icon">
                  <i className="fa fa-tablet" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Responsive design</h5>
                  <p>
                    I can offer responsive design services where I create
                    websites that adapt to different devices and screen sizes,
                    providing users with a consistent and optimal experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-6">
                <div className="icon">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </div>
                <div className="feature-content">
                  <h5>Cross-browser compatibility</h5>
                  <p>
                    I can offer cross-browser compatibility services where I
                    ensure that websites work well across different web browsers
                    and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
