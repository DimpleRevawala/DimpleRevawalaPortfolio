import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-8 col-md-7 text-center text-md-start">
              <h4 className="h1 m-0 text-white">Intrested working with me?</h4>
            </div>
            <div className="col-lg-4 col-md-5 text-center text-md-end">
              <a
                className="px-btn px-btn-theme2"
                data-scroll-nav="4"
                href="#contactus"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        data-scroll-index="3"
        className="section work-section bg-gray text-start"
        id="portfolio"
      >
        <div className="container">
          <div className="row section-heading justify-content-center">
            <div className="col-lg-6 text-center">
              <h3>
                <span>Latest Projects</span>
              </h3>
            </div>
          </div>
          <div className="lightbox-gallery portfolio-box">
            `
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="https://pxdraft.com/themeforest/krinky/assets/img/project-1.jpg"
                    title=""
                    alt=""
                  />
                  <a
                    href="https://pxdraft.com/themeforest/krinky/assets/img/project-1.jpg"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>Web Design</span>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="https://pxdraft.com/themeforest/krinky/assets/img/project-2.jpg"
                    title=""
                    alt=""
                  />
                  <a
                    href="https://pxdraft.com/themeforest/krinky/assets/img/project-2.jpg"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>Web Design</span>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
