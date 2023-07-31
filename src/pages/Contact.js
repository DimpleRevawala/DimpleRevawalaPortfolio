import React from "react";

const Contact = () => {
  return (
    <>
      <section
        data-scroll-index="4"
        id="contactus"
        class="section contactus-section bg-dark"
      >
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-6">
              <div class="contact-form">
                <h6>Get in touch</h6>
                <p class="lead">
                  Our friendly team would love to hear from you.
                </p>
                <form id="contact-form" method="POST">
                  <div class="row gx-3 gy-4">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label">First name</label>
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-label">Your Email</label>
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          class="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label class="form-label">Subject</label>
                        <input
                          name="Subject"
                          id="subject"
                          placeholder="Subject *"
                          class="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-label">Your message</label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows="4"
                          class="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="send">
                        <button
                          class="px-btn px-btn-theme2"
                          type="button"
                          value="Send"
                        >
                          {" "}
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-5 ms-auto col-xl-4">
              <ul class="contact-infos">
                <li>
                  <div class="icon bg-2">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div class="col">
                    <h5>Mail</h5>
                    <p>dimplerevawala1402@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div class="icon bg-3">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="col">
                    <h5>Location</h5>
                    <p>Kitchener, ON, Canada</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
