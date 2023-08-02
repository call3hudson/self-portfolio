import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Colton Huang </span>
            from <span className="purple"> Lyn, Ottawa, Canada.</span>
            <br /> I'm a skilled blockchain developer with over 7 years of
            experience.
            <br />
            I've been working as DeFi engineer for last 4 years and in the
            meantime I had contributed to several DeFi protocols.
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>"Be more creative!" </p>
          <footer className="blockquote-footer">Colton Huang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
