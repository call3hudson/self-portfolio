import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle, FaTelegram } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple"> senior blockchain developer </b>
              with over 7 years of experience, specializing in DeFi engineering
              <br />
              <br />I have contributed to several DeFi protocols, including
              <i>
                <b className="purple"> Synthetix, dYdX, and district0x </b>
              </i>
              <br />
              <br />I am a master of these:
              <i>
                <b className="purple"> C++, Solidity, Rust and Typescript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple">Decentralized Finance </b>
              </i>{" "}
              and also in areas related to{" "}
              <i>
                <b className="purple">AI & Cloud chain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing
              decentralized application with <b className="purple">
                Solidity
              </b>{" "}
              on
              <i>
                <b className="purple"> Ethereum, Arbitrum and Polygon</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                width="300"
                height="300"
                style={{ border: 50 }}
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/call3hudson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/colton-huang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/@junjie3926"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:call3hudson@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGoogle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/call3hudson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
