import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Designer.", "Developer."],

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
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="home-intro one-page-nav text-center text-lg-start">
                <div className="hero">
                  <div className="shape shape--1 path--1"></div>
                  <div className="shape shape--2 path--1"></div>
                  <div className="shape shape--3 path--1"></div>
                  <div className="shape shape--4 path--1"></div>
                  <div className="shape shape--5 path--1"></div>
                  <div className="shape shape--6 path--1"></div>
                </div>
                <h6>👋, My name is Dimple Revawala</h6>
                <h1>
                  I'm a <span ref={el}></span>
                </h1>
                <p>Based in Canada.</p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    Let's Start
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 mt-0">
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
                src="./assests/images/about-img.png"
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
                    I'm a Front-end Developer with over 4 years of experience.
                  </h2>
                  <p className="text-start">
                    I'm a Front-end Developer with over 4 years of experience.
                    I'm from Canada. I code and create web elements for amazing
                    people around the world. I like work with new people. New
                    people new Experiences.
                  </p>
                  <div className="row pt-2 text-start">
                    <div className="col-6 col-md-4">
                      <h5>100+</h5>
                      <span>Projet Completed</span>
                    </div>
                    <div className="col-6 col-md-4">
                      <h5>190+</h5>
                      <span>Happy Clients</span>
                    </div>
                  </div>
                  <div className="btn-bar pt-4 text-start">
                    <a
                      className="px-btn px-btn-theme me-3 me-md-4"
                      href="#contactus"
                    >
                      Contact Me
                    </a>
                    <a
                      className="px-btn px-btn-dark"
                      href="assests/cv/dummy.docx"
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
