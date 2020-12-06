import React from "react";
import "../assets/css/flex-slider.css";
import "../assets/css/font-awesome.css";
import "../assets/css/owl-carousel.css";
import "../assets/css/templatemo-art-factory.css";

import SliderIcon from "../assets/images/slider-icon.png";

export default function Header() {
  return (
    <div>
      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div className="welcome-area" id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div
                className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Art Factory is free <strong>for YOU</strong>
                </h1>
                <p>
                  This template is available for 100% free of charge on
                  TemplateMo. Download, modify and use this for your business
                  website.
                </p>
                <a href="#about" className="main-button-slider">
                  Find Out More
                </a>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src={SliderIcon}
                  className="rounded img-fluid d-block mx-auto"
                  alt="First Vector Graphic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-12 col-sm-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="./assets/images/left-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
              <div className="left-heading">
                <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
              </div>
              <div className="left-text">
                <p>
                  This template is{" "}
                  <a href="#">last updated on 20 August 2019 </a>for main menu
                  drop-down arrow and sub menu text color. Duis auctor dolor eu
                  scelerisque vestibulum. Vestibulum lacinia, nisl sit amet
                  tristique condimentum. <br />
                  <br />
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et
                  sapien sit amet, ultrices malesuada odio. Donec non quam
                  euismod, mattis dui a, ultrices nisi.
                </p>
                <a href="#about2" className="main-button">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section" id="about2">
        <div className="container">
          <div className="row">
            <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
              <div className="left-heading">
                <h5>Curabitur aliquam eget tellus id porta</h5>
              </div>
              <p>
                Proin justo sapien, posuere suscipit tortor in, fermentum mattis
                elit. Aenean in feugiat purus.
              </p>
              <ul>
                <li>
                  <img src="./assets/images/about-icon-01.png" alt="" />
                  <div className="text">
                    <h6>Nulla ultricies risus quis risus</h6>
                    <p>
                      You can use this website template for commercial or
                      non-commercial purposes.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="./assets/images/about-icon-02.png" alt="" />
                  <div className="text">
                    <h6>Donec consequat commodo purus</h6>
                    <p>
                      You have no right to re-distribute this template as a
                      downloadable ZIP file on any website.
                    </p>
                  </div>
                </li>
                <li>
                  <img src="./assets/images/about-icon-03.png" alt="" />
                  <div className="text">
                    <h6>Sed placerat sollicitudin mauris</h6>
                    <p>
                      If you have any question or comment, please{" "}
                      <a rel="nofollow" href="https://templatemo.com/contact">
                        contact
                      </a>{" "}
                      us on TemplateMo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src="./assets/images/right-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Small Start ***** --> */}
      <section className="section" id="services">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-01.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">First Box Service</h5>
                <p>
                  Aenean vulputate massa sed neque consectetur, ac fringilla
                  quam aliquet. Sed a enim nec eros tempor cursus at id libero.
                </p>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-02.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">Second Box Title</h5>
                <p>
                  Pellentesque vitae urna ut nisi viverra tristique quis at
                  dolor. In non sodales dolor, id egestas quam. Aliquam erat
                  volutpat.{" "}
                </p>
                <a href="#" className="main-button">
                  Discover More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-03.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">Third Title Box</h5>
                <p>
                  Quisque finibus libero augue, in ultrices quam dictum id.
                  Aliquam quis tellus sit amet urna tincidunt bibendum.
                </p>
                <a href="#" className="main-button">
                  More Detail
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-02.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">Fourth Service Box</h5>
                <p>
                  Fusce sollicitudin feugiat risus, tempus faucibus arcu blandit
                  nec. Duis auctor dolor eu scelerisque vestibulum.
                </p>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-01.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">Fifth Service Title</h5>
                <p>
                  Curabitur aliquam eget tellus id porta. Proin justo sapien,
                  posuere suscipit tortor in, fermentum mattis elit.
                </p>
                <a href="#" className="main-button">
                  Discover
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-03.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">Sixth Box Title</h5>
                <p>
                  Ut nibh velit, aliquam vitae pellentesque nec, convallis vitae
                  lacus. Aliquam porttitor urna ut pellentesque.
                </p>
                <a href="#" className="main-button">
                  Detail
                </a>
              </div>
              <div className="item service-item">
                <div className="icon">
                  <i>
                    <img src="./assets/images/service-icon-01.png" alt="" />
                  </i>
                </div>
                <h5 className="service-title">Seventh Title Box</h5>
                <p>
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et
                  sapien sit amet, ultrices malesuada odio. Donec non quam.
                </p>
                <a href="#" className="main-button">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Small End ***** --> */}
    </div>
  );
}
