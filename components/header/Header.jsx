import React from "react";
import Link from 'next/link'

export default function Header() {
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center"
    >
      <div className="container d-flex align-items-center">
        <a href="/" className="logo me-auto">
          <img src="/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link href="/about">
                <a className="nav-link scrollto">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/colleges">
                <a className="nav-link scrollto">
                  Colleges
                </a>
              </Link>
            </li>
            <li>
              <Link href="/exams">
                <a className="nav-link scrollto ">
                  Exams
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="nav-link scrollto ">
                  Mock Test
                </a>
              </Link>
            </li>
            {/* <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
