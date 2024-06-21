import React from "react";

const soical = {
  github: "https://github.com/kasimkazmi",
  linkedin: "https://www.linkedin.com/in/kasimkazmi/",
  dribbble: "https://dribbble.com/dimplevyas",
  instagram: "https://www.instagram.com/its_always_be_me",
};
const Footer = () => {
  return (
    <>
      <footer className="footer non-selectable bg-gray">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center   ">
            {/* <div className="col-md-6 py-2">
              <div className="nav justify-content-center justify-content-md-start">
                <a
                  href="https://github.com/kasimkazmi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kasimkazmi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://dribbble.com/dimplevyas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/its_always_be_me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div> */}
            <div className="col-lg-6  ">
              <p className="m-0  bold-text d-flex justify-content-center align-items-center">
                {"{ Fighting Bugs and Saving the World One Commit at a Time }"}
              </p>
              <span className="pt-2 col-lg-12 d-flex justify-content-center align-items-center">
                <p className="">Procrastination Expert&nbsp; </p> <p>| &nbsp;</p>
                <p> Code Wizard &nbsp;</p>
                <p>| &nbsp;</p>
                <p>Problem Solver</p>
              </span>
              <p className="bold-text d-flex justify-content-center align-items-center">
                Kasim - Full Stack Virtuoso © 2024 &nbsp;
                <i
                  className="fa fa-heart heart-icon pulse "
                  aria-hidden="true"
                />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
