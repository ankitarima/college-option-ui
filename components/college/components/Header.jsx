import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
    <header id="singleheader" className="fixed-top d-flex align-items-center" >
      <div className="container d-flex align-items-center">
        <nav id="navbar-single" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto smooth-goto" href="#basic-info">
                  Basic Info
                </a>
            </li>
            <li>
            <a className="nav-link scrollto smooth-goto" href="#connectivity">
                  Connectivity
                </a>
            </li>
            <li>
              <a className="nav-link scrollto smooth-goto " href="#ranking">
                Ranking
              </a>
            </li>
            <li>
              <a className="nav-link scrollto smooth-goto" href="#eligibility">
              Eligibility Criteria
              </a>
            </li>
            <li>
              <a className="nav-link scrollto smooth-goto" href="#admission">
              Admission Process
              </a>
            </li>
            <li>
              <a className="nav-link scrollto smooth-goto" href="#courses">
              Courses
              </a>
            </li>
            <li>
              <a className="nav-link scrollto smooth-goto" href="#admission">
              Admission Process
              </a>
            </li>
            <li>
              <a className="nav-link scrollto smooth-goto" href="#admission">
              Admission Process
              </a>
            </li>
          </ul>
          <i className="bi bi-list signle-menu-toogle" data-bs-toggle="modal" data-bs-target="#menuModal"></i>
        </nav>
      </div>


<div className="modal" id="menuModal" aria-labelledby="menuModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content menu-modal">
      <div className="modal-header">
        <h5 className="modal-title" id="menuModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body mobile-single-menu">
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
              <a className="nav-link scrollto " href="#">
                Exams
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Tools
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#">
                Forum
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</div>
    </header>
    )
}
