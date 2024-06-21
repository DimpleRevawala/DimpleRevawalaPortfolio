import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 py-2">
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
            </div>
            <div className="col-md-6 py-2 text-center text-md-end">
              <p className="m-0">
                © 2024 Kasim Kazmi{" "}
                <i className="fa fa-heart" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
