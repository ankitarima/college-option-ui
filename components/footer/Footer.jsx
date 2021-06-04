import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="section-bg">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer-info">
                      <h3>College Option</h3>
                      <h4>Contact Us</h4>
                      <p>
                        A108 Adam Street <br />
                        New York, NY 535022
                        <br />
                        United States <br />
                        <strong>Phone:</strong> +1 5589 55488 55
                        <br />
                        <strong>Email:</strong>{" "}
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="97fef9f1f8d7f2eff6fae7fbf2b9f4f8fa"
                        >
                          [email&#160;protected]
                        </a>
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="footer-links">
                      <h4>Top colleges </h4>
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#about">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                <div className="col-sm-6">
                    <div className="footer-links">
                      <h4>Clleges In</h4>
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#about">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer-links">
                      <h4>Popular Exams</h4>
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#about">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Terms of service</a>
                        </li>
                        <li>
                          <a href="#">Privacy policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

        <div className="container">
          <div>
            <hr />
          </div>
          <div className="copyright">
            &copy; Copyright <strong>College Option</strong>. All Rights
            Reserved
          </div>
          <div className="credits">
            Designed by <a href="">Akola Digital</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
