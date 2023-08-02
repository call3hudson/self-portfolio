import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home.png";
import remoteLogo from "../../Assets/remote.png";
import restLogo from "../../Assets/rest.png";
import Home2 from "./Home2";
import Type from "./Type";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <section>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        labels={{
          leftArrow: "previous slide / item",
          rightArrow: "next slide / item",
          item: "slide item",
        }}
        stopOnHover={true}
        showStatus={false}
        showArrows={false}
        interval={5000}
        transitionTime={900}
      >
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Welcome To My Digital Space{" "}
                  {/* <span className="wave" role="img" aria-labelledby="wave">
                  😎
                </span> */}
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> COLTON HUANG</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={remoteLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ width: "440px", maxHeight: "450px" }}
                />
              </Col>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  I was really busy in the morning
                </h1>

                <h1 style={{ paddingBottom: 15 }} className="heading">
                  I really hate heavy traffic
                </h1>
                <br />

                <h1 className="heading-name">
                  I'M OPEN TO
                  <strong className="main-name"> REMOTE JOBS</strong>
                </h1>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Let me tell you my interest
                </h1>

                <h1 style={{ paddingBottom: 15 }} className="heading">
                  I like jogging with{" "}
                  <strong className="main-name">Hudson</strong>{" "}
                </h1>
                <br />

                <h1 className="heading-name">
                  HE'S{" "}
                  <strong className="main-name">RESOURCEFUL GUY EVER</strong>
                </h1>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={restLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    paddingTop: "100px",
                    width: "440px",
                    maxHeight: "450px",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </Carousel>
      <Home2 />
    </section>
  );
}

export default Home;
