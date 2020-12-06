import React from "react";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/templatemo-art-factory.css";

export default function Navbar() {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="#" className="logo">
                  Art Factory
                </a>
                {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#welcome" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about">About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#frequently-question">Frequently Questions</a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:;">Drop Down</a>
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">Features</a>
                      </li>
                      <li>
                        <a href="">FAQ's</a>
                      </li>
                      <li>
                        <a href="">Blog</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact-us">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
