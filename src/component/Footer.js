import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 py-2">
              <div class="nav justify-content-center justify-content-md-start">
                <a
                  href="https://github.com/DimpleRevawala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dimple-revawala-bb1ab3136"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://dribbble.com/dimplevyas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-dribbble"></i>
                </a>
                <a
                  href="https://www.instagram.com/dimple_revawala/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 py-2 text-center text-md-end">
              <p class="m-0">
                © 2023 Dimple Revawala{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
