import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCog, faDesktop, faGem, faLink, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Scroll from "../components/Scroll";
import Sidebar from "../components/sidebar";
import pic1 from "../images/pic01.jpg";
import pic2 from "../images/pic02.jpg";
import pic3 from "../images/pic03.jpg";

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>STEAM Equity</h1>
          <p>rewriting everything here was a mistake - me at 11:36pm</p>
          <p>god is dead and this website killed him - me at 8:36pm the next day</p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a
            href="/#"
            className="image"
            style={{ backgroundImage: `url(${pic1})`, backgroundPosition: "center center" }}
          ></a>
          <div className="content">
            <div className="inner">
              <h2>Block 1</h2>
              <p>
                Convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
                Aliquam dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a
            href="/#"
            className="image"
            style={{ backgroundImage: `url(${pic2})`, backgroundPosition: "top center" }}
          ></a>
          <div className="content">
            <div className="inner">
              <h2>Block 2</h2>
              <p>
                Convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
                Aliquam dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a
            href="/#"
            className="image"
            data-position="25% 25%"
            style={{ backgroundImage: `url(${pic3})`, backgroundPosition: "25% 25%" }}
          ></a>
          <div className="content">
            <div className="inner">
              <h2>Block 3</h2>
              <p>
                Convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
                Aliquam dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <p>
            Convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
            Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis
            lorem.
          </p>
          <div className="features">
            <section>
              <span className="icon major">
                <FontAwesomeIcon icon={faCode} />
              </span>
              <h3>Lorem ipsum amet</h3>
              <p>
                Convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <h3>Aliquam sed nullam</h3>
              <p>
                Convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major">
                <FontAwesomeIcon icon={faCog} />
              </span>
              <h3>Sed erat ullam corper</h3>
              <p>
                Convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major">
                <FontAwesomeIcon icon={faDesktop} />
              </span>
              <h3>Veroeros quis lorem</h3>
              <p>
                Convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major">
                <FontAwesomeIcon icon={faLink} />
              </span>
              <h3>Urna quis bibendum</h3>
              <p>
                Convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major">
                <FontAwesomeIcon icon={faGem} />
              </span>
              <h3>Aliquam urna dapibus</h3>
              <p>
                Convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>
            Convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis.
            Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis
            lorem.
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea style={{
                      resize: "vertical"
                    }} name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    12345 Somewhere Road #654
                    <br />
                    San Jose, CA 00000-0000
                    <br />
                    USA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a>user@untitled.tld</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(000) 000-0000</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a title="Instagram" href="https://www.instagram.com/sjhssteamequityy/">
                        <FontAwesomeIcon icon={faInstagram} />
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a title="GitHub" href="https://github.com/pizzafox/steam-equity-website">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
