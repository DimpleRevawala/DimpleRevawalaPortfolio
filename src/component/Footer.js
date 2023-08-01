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
                  href="https://github.com/DimpleRevawala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dimple-revawala-bb1ab3136"
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
                  <i className="fab fa-dribbble"></i>
                </a>
                <a
                  href="https://www.instagram.com/dimple_revawala/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 py-2 text-center text-md-end">
              <p className="m-0">
                © 2023 Dimple Revawala{" "}
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
