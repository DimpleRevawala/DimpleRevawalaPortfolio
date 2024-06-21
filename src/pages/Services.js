import React from "react";

const Services = () => {
  return (
    <>
      <section
        data-scroll-index="1"
        className="section services-section non-selectable bg-gray"
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
                <div className="">
                  <img src="./assests/images/full-stack.png" />
                </div>
                <div className="feature-content">
                  <h5>Full Stack Development</h5>
                  <p>
                    I can design and develop responsive, scalable, and secure
                    web applications using front-end and back-end technologies,
                    ensuring a seamless user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-2">
                <div className="">
                  <img src="./assests/images/web-design.png" />
                </div>
                <div className="feature-content">
                  <h5>Web Application Development</h5>
                  <p>
                    I can develop custom web applications using React.js,
                    Node.js, Next.js, and Tailwind CSS, allowing for fast
                    development, scalability, and maintainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-3">
                <div className="">
                  <img src="./assests/images/mobileApp.png" />
                </div>
                <div className="feature-content">
                  <h5>Mobile App Development </h5>
                  <p>
                    I can develop cross-platform mobile applications for Android
                    and iOS using React Native, allowing for fast development
                    and cost-effective maintenance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-6">
                <div className="">
                  <img src="./assests/images/ecommerce-app.png" />
                </div>
                <div className="feature-content">
                  <h5>E-commerce Solution Development </h5>
                  <p>
                    I can design and develop custom e-commerce solutions using
                    platforms like Shopify, with features like payment gateways,
                    shipping integrations, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-4">
                <div className="">
                  <img src="./assests/images/tool.png" />
                </div>
                <div className="feature-content">
                  <h5>UI/UX design</h5>
                  <p>
                    I can create intuitive, easy-to-use interfaces that help
                    users achieve their goals, using design principles like
                    human-centered design, user research, and usability testing.
                    With expertise in Adobe XD and Canva, I can design visually
                    appealing and user-friendly interfaces for web and mobile
                    applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-box-01 bg-5">
                <div className="">
                  <img src="./assests/images/devops.png" />
                  {/* <i className="fa fa-tablet" aria-hidden="true"></i> */}
                </div>
                <div className="feature-content">
                  <h5>DevOps and Deployment Services</h5>
                  <p>
                    I can offer DevOps and deployment services where I set up
                    and configure development, staging, and production
                    environments for web applications. I can develop and
                    implement continuous integration and continuous deployment
                    (CI/CD) pipelines using tools like Jenkins, ensuring fast
                    and reliable deployment of applications.
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
