import React from "react";

const Portfolio = () => {
  return (
    <>
      <section class="py-5 bg-dark">
        <div class="container">
          <div class="row gy-3">
            <div class="col-lg-8 col-md-7 text-center text-md-start">
              <h4 class="h1 m-0 text-white">Intrested working with me?</h4>
            </div>
            <div class="col-lg-4 col-md-5 text-center text-md-end">
              <a
                class="px-btn px-btn-theme2"
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
        class="section work-section bg-gray text-start"
        id="portfolio"
      >
        <div class="container">
          <div class="row section-heading justify-content-center">
            <div class="col-lg-6 text-center">
              <h3>
                <span>Latest Projects</span>
              </h3>
            </div>
          </div>
          <div class="lightbox-gallery portfolio-box">
            `
            <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div class="col-md-6 col-lg-5">
                <div class="portfolio-img">
                  <img
                    src="https://pxdraft.com/themeforest/krinky/assets/img/project-1.jpg"
                    title=""
                    alt=""
                  />
                  <a
                    href="https://pxdraft.com/themeforest/krinky/assets/img/project-1.jpg"
                    class="gallery-link gallery-link-icon"
                  >
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="portfolio-text">
                  <h6>
                    <span>Web Design</span>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div class="btn-bar">
                    <a
                      class="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="#contactus"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div class="col-md-6 col-lg-5">
                <div class="portfolio-img">
                  <img
                    src="https://pxdraft.com/themeforest/krinky/assets/img/project-2.jpg"
                    title=""
                    alt=""
                  />
                  <a
                    href="https://pxdraft.com/themeforest/krinky/assets/img/project-2.jpg"
                    class="gallery-link gallery-link-icon"
                  >
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="portfolio-text">
                  <h6>
                    <span>Web Design</span>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div class="btn-bar">
                    <a
                      class="px-btn px-btn-theme"
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
