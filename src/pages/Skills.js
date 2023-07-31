import React from "react";

const Skills = () => {
  return (
    <>
      <section
        data-scroll-index="2"
        class="section experience-section"
        id="skill"
      >
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-7">
              <div class="section-heading">
                <h3 class="m-0">
                  <span>My Skills</span>
                </h3>
              </div>
              <div class="skill-box">
                <div class="row g-3">
                  <div class="col-6 col-md-4 col-lg-6">
                    <div class="feature-box-02 bg-1">
                      <div class="icon">
                        <i class="fab fa-html5"></i>
                      </div>
                      <h6>HTML</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-6">
                    <div class="feature-box-02 bg-2">
                      <div class="icon">
                        <i class="fab fa-css3"></i>
                      </div>
                      <h6>CSS</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-6">
                    <div class="feature-box-02 bg-3">
                      <div class="icon">
                        <i class="fab fa-react"></i>
                      </div>
                      <h6>React JS</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-6">
                    <div class="feature-box-02 bg-4">
                      <div class="icon">
                        <i class="fab fa-node-js"></i>
                      </div>
                      <h6>Node JS</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-6">
                    <div class="feature-box-02 bg-5">
                      <div class="icon">
                        <i class="fa fa-database"></i>
                      </div>
                      <h6>Mongo DB</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-6">
                    <div class="feature-box-02 bg-6">
                      <div class="icon">
                        <i class="fab fa-js"></i>
                      </div>
                      <h6>JavaScript</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 text-center skill-right">
              <img
                src="/assests/images/skill-img.png"
                title="Skill section image"
                alt="Skill section image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
