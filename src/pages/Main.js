import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Designer.",
        "Developer.",
        "Entrepreneur",
        "Creator",
        "Problem Solver.",
        "Digital Dreamer",
      ],

      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section data-scroll-index="0" className="bg-gray home-section non-selectable">
        <div className="container">
          <div className="row gy-6  justify-center align-items-center">
            <div className="col-lg-8  align-items-center">
              <div className="home-intro one-page-nav text-center text-lg-start">
                <h6>
                  <span className="slide-in-emoji">
                    👋Hey, My name is Kasim Kazmi
                  </span>
                </h6>

                <h1 className="slide-in-emoji">
                  I'm a <span ref={el}></span>
                </h1>
                {/* <p>Based in Canada.</p> */}
                {/* <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    Let's Start
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 pt-3 pt-lg-0 mt-0">
              <div className="home-image text-center">
                <img
                  src="./assests/images/main.png"
                  title="Header image"
                  alt="Header image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-section non-selectable " id="services">
        <div className="container  ">
          <div className="row gy-5 align-items-center">
            <div className="col-sm-4 col-lg-4 mt-lg-5 pt-lg-5 order-2 order-md-0 text-center">
              <img
                src="./assests/images/about-img.jpg"
                title="About section image"
                alt="About section image"
              />
            </div>
            <div className="col-sm-7   col-lg-7 ps-lg-5 offset-md-1">
              <div className="about-right ">
                <div className="bulb-bunch">
                  <div className="bulb-holder">
                    <div className="bulb">
                      <div className="light"></div>
                    </div>
                  </div>

                  <div className="bulb-holder" id="b1">
                    <div className="bulb">
                      <div className="light"></div>
                    </div>
                  </div>
                  <div className="bulb-holder" id="b2">
                    <div className="bulb">
                      <div className="light"></div>
                    </div>
                  </div>
                </div>
                <div className="about-text  mt-lg-5 pt-lg-5">
                  <h2 className="about-header text-start">
                    Mobile App and Web Development Expert
                  </h2>
                  <p className="text-start">
                    As a seasoned software developer based in Toronto, Ontario,
                    Canada, I specialize in crafting innovative mobile app and
                    web solutions that drive results. With a strong background
                    in React Native development and a passion for staying
                    up-to-date with the latest industry trends, I excel in
                    delivering high-quality products that meet and exceed client
                    expectations. I have a proven track record of success in my
                    previous role as a React Native Developer at Apptunix, where
                    I implemented various features, utilized Redux for data
                    handling, and collaborated with cross-functional teams to
                    deliver high-quality products. My skills include full stack
                    web development, web design, agile methodologies, cloud
                    platforms, database management, and version control. I'm
                    proficient in a range of technologies, including React
                    Native, HTML, CSS, JavaScript, React, Node.js, Adobe
                    Creative Suite, AWS, Google Cloud, MySQL, MongoDB, Git, and
                    SVN.
                  </p>
                  {/* <div className="row pt-2 text-start">
                    <div className="col-6 col-md-4">
                      <h5>50+</h5>
                      <span>Projet Completed</span>
                    </div>
                    <div className="col-6 col-md-4">
                      <h5>100+</h5>
                      <span>Happy Clients</span>
                    </div>
                  </div> */}
                  <div className="btn-bar pt-4 text-start">
                    <a
                      className="px-btn px-btn-theme me-3 me-md-4"
                      href="#contactus"
                    >
                      Contact Me
                    </a>
                    <a
                      className="px-btn px-btn-dark"
                      // href="assests/cv/dummy.docx"
                      href="https://read.cv/kasimkazmi"
                      target="_blank"
                    >
                      See Resume
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

export default Main;
