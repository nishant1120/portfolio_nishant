import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/tech-boi.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack
            iconName="devicon-cplusplus-line"
            iconType="C++"
            iconPercent="40"
          />
          <Techstack
            iconName="devicon-python-plain-wordmark "
            iconType="Python"
            iconPercent="70"
          />
          <Techstack
            iconName="devicon-javascript-plain "
            iconType="JavaScript"
            iconPercent="80"
          />
          <Techstack
            iconName="devicon-react-original-wordmark"
            iconType="React JS"
            iconPercent="90"
          />
          <Techstack
            iconName="devicon-mongodb-plain-wordmark"
            iconType="MongoDb"
            iconPercent="60"
          />
          <Techstack
            iconName="devicon-git-plain-wordmark"
            iconType="Github"
            iconPercent="100"
          />
          <Techstack
            iconName="devicon-bootstrap-plain-wordmark"
            iconType="Bootstrap"
            iconPercent="100"
          />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack
            iconName="devicon-linux-plain"
            iconType="Linux"
            iconPercent="80"
          />
          <Techstack
            iconName="cib-visual-studio-code"
            iconType="VS Code"
            iconPercent="80"
          />
          <Techstack
            iconName="cib-postman"
            iconType="Postman"
            iconPercent="80"
          />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
