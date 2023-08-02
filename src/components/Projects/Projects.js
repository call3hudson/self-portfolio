import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import synthetix from "../../Assets/Projects/synthetix.png";
import dydx from "../../Assets/Projects/dydx.png";
import district0x from "../../Assets/Projects/district0x.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few information of companies that I've worked with.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={synthetix}
              isBlog={false}
              title="Synthetix"
              description="I've worked as smart contract engineer and back-end developer in Synthetix and built several synthetix assets on Ethereum network.
Synthetix is a decentralized finance protocol that enables the creation of synthetix assets on the ethereum blockchain. Synthetix allows users to gain on-chain exposure to real-world assets and trade them in a completely decentralized market. Synthetix brings the new term `Synthetix assets` which enables the creation of synthetix assets, which are ERC20 tokens that track the price of real-world assets, such as gold, silver and other crytocurrencies.
Since it's my first career of blockchain dev, I first collaborated with my senior friend and worked with him for the first 2 years. 
I wrote my first smart contract in Solidity at the end of 2017. And that is the starting point of my blockchain developer's career.
Since then, I've participated the development of Kwenta - the Synthetix's own decentralized exchange where users can trade Synthetic assets without the need for intermediaries. I've also participated in development of Kwenta. My role was to collect price information from Synthetix and external oracles."
              demoLink="https://synthetix.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dydx}
              isBlog={false}
              title="dYdX"
              description="I worked for dYdX from 2019, as DeFi engineer. dYdX is a decentralized finace protocol that operates as a decentralized trading for cryptocurrency. It's pretty famous with margin trading. Here margin trading is a system of trading assets using borrowed funds provided by a third party.
In the case of dYdX, margin is the amount of money that a trader puts up as collateral to borrow funds. And perpetual trading is a type of trading that allows investors to hold their buy or sell positions indefinitely until the predetermined trade conditions are met. It is a synthetic trading market that allows for exposure to arbitrary liquid assets using stablecoin collateral. Perpetuals are similar to traditional futures contracts as both tie their prices to the spot prices of underlying assets, but unlike traditional futures, perps have no expiry date. dYdX allows users to trade over 35 different cryptocurrencies, including Bitcoin, Ether, and Cardano, among others. The bulk of dYdX's crypto margin trading products reside atop the Ethereum blockchain. On the other hand dYdX offers a wide range of financial instruments, including perpetuals, margin, spot trading, lending borrowing and making bets on the future prices of popular cryptocurrencies.
I've participated in building cross-margin perpetual trading. I've integrated several necessary smart contracts that enable cross-margin perpetual trading on Ethereum and Starknet. I've also participated in development of risk management tools. "
              demoLink="https://dydx.exchange/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={district0x}
              isBlog={false}
              title="district0x"
              description="District0x is a software built on the Ethereum blockchain that allows users to create and host decentralized marketplaces and communities called 'Districts'.
It is an open-source smart contract framework.
The purpose of district0x aims to establish a community of marketplaces and organizations that are independent from centralization. It provides developers with an open-source blockchain foundation to create their own districts, which are decentralized applications(dApps) and entitles that exist on the District0x network. I've worked as smart contract engineer and built several districts such as built lending & borrowing, yield farming smart contract districts on Ethereum, Arbitrum and Polygon network."
              demoLink="https://district0x.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
