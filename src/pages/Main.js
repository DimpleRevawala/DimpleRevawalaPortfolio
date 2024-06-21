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
      <section data-scroll-index="0" className="bg-gray home-section">
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
      <section className="section about-section" id="services">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-sm-4 col-lg-4 mt-lg-5 pt-lg-5 order-2 order-md-0 text-center">
              <img
                src="./assests/images/about-img.jpg"
                title="About section image"
                alt="About section image"
              />
            </div>
            <div className="col-sm-7 col-lg-7 ps-lg-5 offset-md-1">
              <div className="about-right">
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
                <div className="about-text mt-lg-5 pt-lg-5">
                  <h2 className="about-header text-start">
                    Full-Stack Developer with a strong background in web and
                    mobile app development.
                  </h2>
                  <p className="text-start">
                    I'm a Full-Stack Developer with having experience in web and
                    mobile app develpment. I'm a Full-Stack Developer with
                    having experience in web and mobile app develpment. I'm a
                    Full-Stack Developer with having experience in web and
                    mobile app develpment.
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
