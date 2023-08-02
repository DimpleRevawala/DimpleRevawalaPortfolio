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
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-1.png"
                    title="Coffee House"
                    alt="Coffee House"
                  />
                  <a
                    href="./assests/images/work-1.png"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>UI Experience</span>
                  </h6>
                  <h4>A Coffee House UI Experience</h4>
                  <p>
                    As a passionate designer, I present an ode to coffee houses
                    with this visually captivating user interface. "Brewing
                    Artistry" brings together the warmth of earthy tones, the
                    playfulness of coffee-themed icons, and the sophistication
                    of minimalist dlish, modern websites, web services and
                    online stores
                  </p>
                  <div>
                    <h5>
                      Tools of choice :{" "}
                      <strong className="fs-6 text-black-50">
                        Photoshop, Illustrator, Figma, Adobe XD
                      </strong>
                    </h5>
                  </div>
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="./assests/work/work-1.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-2.png"
                    title="Inhaircare UI"
                    alt="Inhaircare UI"
                  />
                  <a
                    href="https://xd.adobe.com/view/de405956-6fbf-4951-b2e4-a64836aea901-8b13/grid/"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>UI Experience + Shopify</span>
                  </h6>
                  <h4>Artistic Designs for Haircare Products</h4>
                  <p>
                    Welcome to Beauty in Pixels, where the magic of Shopify
                    e-commerce converges with the creative brilliance of Adobe
                    XD, Photoshop, Illustrator, HTML, CSS, and JS. Here, I
                    present a captivating collection of beauty product UI
                    designs that elevate the shopping experience.
                    <br />
                    Behind the scenes, HTML, CSS, and JS work their magic to
                    bring these stunning designs to life on Shopify. The
                    seamless integration of front-end technologies ensures a
                    smooth and responsive shopping experience, captivating users
                    on any device.
                  </p>

                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="https://inhaircare.co/"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-3.png"
                    title="Admin panel"
                    alt="Admin Panel"
                  />
                  <a
                    href="./assests/images/work-3.png"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>Html + CSS + JS</span>
                  </h6>
                  <h4>
                    Universal Admin Panel: Centralized Control with HTML, CSS,
                    JS, and Bootstrap
                  </h4>
                  <p>
                    Welcome to the Universal Admin panel, a central control
                    panel crafted with HTML, CSS, JS, and the power of
                    Bootstrap. Here, I present an all-inclusive admin panel with
                    dynamic features like bar charts and more, providing a
                    seamless experience for managing diverse tasks and data.
                    <br />
                    Embrace the power of bar charts and dynamic data
                    visualization, as I integrate JS libraries to present
                    complex data in an easily digestible manner. Visualize
                    trends, monitor progress, and gain valuable insights with
                    interactive and aesthetically pleasing bar charts, enhancing
                    your decision-making process.
                  </p>

                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="https://admin.pixelstrap.com/universal/default/index.html"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gx-3 pb-3 mb-5 pb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-img">
                  <img
                    src="./assests/images/work-4.png"
                    title="Job Search website"
                    alt="Job Search website"
                  />
                  <a
                    href="./assests/images/work-4.png"
                    className="gallery-link gallery-link-icon"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="portfolio-text">
                  <h6>
                    <span>React</span>
                  </h6>
                  <h4>
                    Jobvia: Navigating the Job Search Landscape with React
                  </h4>
                  <p>
                    Welcome to Jobvia, a dynamic job search platform powered by
                    React that paves the way to endless opportunities. With a
                    user-centric design and advanced features, Jobvia empowers
                    job seekers and employers alike to connect with ease.
                    <br />
                    The power of React components and state management ensures a
                    smooth and enjoyable user experience, while real-time
                    updates keep candidates informed about the latest job
                    postings. As an aspiring job seeker, explore personalized
                    job recommendations tailored to your skills and interests,
                    making your search efficient and rewarding. Employers, on
                    the other hand, benefit from a user-friendly dashboard to
                    manage job postings and review applicant profiles.
                    <br />
                    The website's modular structure, designed with HTML, CSS,
                    and React, allows for easy scalability and maintenance,
                    enabling seamless integration of future enhancements and
                    features.
                  </p>

                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      data-scroll-nav="4"
                      href="https://jobvia.react-light.pichforest.com/"
                      target="_blank"
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
